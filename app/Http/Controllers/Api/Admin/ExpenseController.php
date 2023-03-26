<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Expense;
use App\Models\ExpenseType;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Traits\PaymentTrait;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExpenseRequest;

class ExpenseController extends Controller
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
    public function index()
    {
        $exenses = Expense::with('expenseType:id,name')->whereSessionId(currentSession())->latest()->where("school_id", $this->school->id)->simplePaginate(10);
        return response()->json($exenses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ExpenseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseRequest $request)
    {
        $data = $request->only(['type_id', 'amount', 'description']);
        $data['session_id'] = currentSession();
        $data['transaction_no'] = uniqid();
        $data["school_id"] = $this->school->id;
        $expense = Expense::create($data);
        $expense_type = ExpenseType::whereId($expense->type_id)->where("school_id", $this->school->id)->first()->name;

        $this->createExpenseTransaction($expense->transaction_no, $expense_type, $expense->amount);

        return responseSuccess('expense', $expense, 'Expense Created Successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ExpenseRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ExpenseRequest $request, Expense $expense)
    {
        $data = $request->only(['type_id', 'amount', 'description']);
        $expense->update($data);

        return responseSuccess('expense', $expense, 'Expense Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($expense)
    {
        $expense = Expense::find($expense);
        if ($expense) {
            $expense->delete();
            Transaction::where('transaction_no', $expense->transaction_no)->delete();
        }

        return responseSuccess('', '', 'Expense Deleted Successfully');
    }
}
