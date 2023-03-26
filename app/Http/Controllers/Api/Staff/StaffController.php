<?php

namespace App\Http\Controllers\Api\Staff;

use App\Models\User;
use App\Models\Staff;
use App\Http\Requests\StaffRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\Staff\StaffResource;

class StaffController extends Controller
{
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
        $staffs = Staff::with('user')->where("school_id", $this->school->id)->paginate(12);

        return StaffResource::collection($staffs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StaffRequest $request)
    {
        $data = $request->except(['role', 'password']) + ['role' => 'staff', 'password' => bcrypt($request->password)];
        $data['school_id'] = $this->school->id;
        $user = User::create($data);
        $staff  = Staff::create($request->all() + ['user_id' => $user->id, 'school_id' => $this->school->id]);

        return responseSuccess('staff', $staff, 'Staff create successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function show(Staff $staff)
    {
        if($staff->school_id != $this->school->id){
            return responseError("invalid request", 404);
        }
        return new StaffResource($staff->load('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function update(StaffRequest $request, Staff $staff)
    {
        if($staff->school_id != $this->school->id){
            return responseError("invalid request", 404);
        }
        $staff->update($request->except('user_id'));
        $staff->user()->update($request->only(['name', 'email']));

        return responseSuccess('staff', $staff);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function destroy($staff)
    {
        $staff = Staff::find($staff);
        if($staff->school_id != $this->school->id){
            return responseError("invalid request", 404);
        }
        $staff->user()->delete();
        $staff->delete();

        return responseSuccess('staff', null, 'Staff delete successfully!');
    }
}
