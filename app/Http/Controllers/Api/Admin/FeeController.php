<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Fee;
use App\Models\User;
use App\Models\Student;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Traits\PaymentTrait;
use App\Http\Requests\FeesRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\FeeUpdateRequest;
use App\Notifications\FeePaidNotification;
use App\Notifications\MessageNotification;

class FeeController extends Controller
{
    use PaymentTrait;
    public $school;

    public function __construct()
    {
        $this->school = school();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $fees = Fee::with(['student' => function ($q) {
            $q->with('user:id,name');
        }, 'parent' => function ($q) {
            $q->with('user:id,name');
        }])->whereSessionId(currentSession())
            ->whereClassId($request->class_id)
            ->whereSectionId($request->section_id)
            ->whereTypeId($request->type_id)
            ->whereStatus($request->status)->where("school_id", $this->school->id)
            ->latest('due_date')
            ->simplePaginate(10)
            ->withQueryString();

        return response()->json($fees);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  FeesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeesRequest $request)
    {
        $session_id = currentSession();

        if ($request->invoice_type == 'bulk') {
            Student::whereSessionId($session_id)
                ->where('class_id', $request->class_id)
                ->where('section_id', $request->section_id)->where("school_id", $this->school->id)
                ->get()
                ->each(function ($student) use ($request, $session_id) {
                    $data = $request->only(['type_id', 'class_id', 'section_id', 'amount', 'due_date', 'status', 'description']);
                    $data['session_id'] = $session_id;
                    $data['student_id'] = $student->id;
                    $data['parent_id'] = $student->guardian->id;
                    $data['transaction_no'] = uniqid();
                    $data['school_id'] = $this->school->id;
                    $fee = Fee::create($data);

                    if ($request->send_notification) {
                        $student->user->notify(new MessageNotification($student->user, auth()->user(), $request->title, $request->message));
                        $student->guardian->user->notify(new MessageNotification($student->guardian->user, auth()->user(), $request->title, $request->message));
                    }

                    if ($request->status) {
                        $this->feeMarkPaid($fee);
                    }
                });

            return responseSuccess('', '', 'Fees Allocation Successfully');
        } else {
            $student = Student::whereSessionId($session_id)
                ->where('class_id', $request->class_id)
                ->where('section_id', $request->section_id)->where("school_id", $this->school->id)
                ->first();

            $data = $request->only(['type_id', 'class_id', 'section_id', 'amount', 'due_date', 'status', 'description']);
            $data['session_id'] = $session_id;
            $data['student_id'] = $student->id;
            $data['parent_id'] = $student->guardian->id;
            $data['transaction_no'] = uniqid();
            $data['school'] = $this->school->id;
            $fee = Fee::create($data);

            if ($request->send_notification) {
                $student->user->notify(new MessageNotification($student->user, auth()->user(), $request->title, $request->message));
                $student->guardian->user->notify(new MessageNotification($student->guardian->user, auth()->user(), $request->title, $request->message));
            }

            if ($request->status) {
                $this->feeMarkPaid($fee);
            }

            return responseSuccess('', '', 'Fees Allocation Successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Fee $fee)
    {
        return response()->json($fee->load('type:id,name'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param FeesUpdateRequest  $request
     * @param  Fee  $fee
     * @return \Illuminate\Http\Response
     */
    public function update(FeeUpdateRequest $request, Fee $fee)
    {
        $fee->update([
            'type_id' => $request->type_id,
            'class_id' => $request->class_id,
            'section_id' => $request->section_id,
            'amount' => $request->amount,
            'due_date' => $request->due_date,
            'description' => $request->description,
        ]);

        return responseSuccess('', '', 'Fee Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($fee)
    {
        $fee = Fee::find($fee);
        $fee->delete();
        return responseSuccess('', '', 'Fee Deleted Successfully');
    }

    public function feeMarkPaid(Fee $fee)
    {
        $fee_details = $fee->load('type', 'student');

        $users = User::where('role', 'admin')->orWhere('role', 'staff')->where("school_id", $this->school->id)->get();
        $users->each(function ($user) use ($fee_details) {
            if ($user->original_role == 'Admin' || $user->original_role == 'Accountant') {
                $user->notify(new FeePaidNotification($user, $fee_details->student->user, $fee_details->amount, $fee_details->type->name));
            }
        });

        if ($users) {
            $fee->update(['status' => 1]);
            $this->createIncomeTransaction($fee_details->transaction_no, $fee_details->student_id, $fee_details->type->name, $fee_details->amount);
            $this->feePay($fee->id);
        }

        return responseSuccess('', '', 'Fee Marked as Paid Successfully');
    }

    public function feeMarkUnpaid(Fee $fee)
    {
        $fee->update(['status' => 0, 'pay_date' => null]);
        Transaction::where('transaction_no', $fee->transaction_no)->first();

        return responseSuccess('', '', 'Fee Marked as Unpaid Successfully');
    }
}
