<?php

namespace App\Http\Controllers\Api\Staff;

use App\Http\Controllers\Controller;
use App\Http\Resources\Department\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
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
        $departments = Department::where("school_id", $this->school->id)->get();
        return DepartmentResource::collection($departments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);
        $data = $request->all();
        $data["school_id"] = school()->id;
        $department = Department::create($data);

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $url = uploadFileToPublic($request->image, 'department');
            $department->update(['image' => $url]);
        }

        return responseSuccess('department', $department, 'Department Created Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        return new DepartmentResource($department);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        $request->validate([
            'name' => ['required', 'unique:departments,name,' . $department->id]
        ]);
        if($department->school_id != $this->school->id){
            return responseError("invalid request", 404);
        }
        $department->update($request->all());

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            deleteImage($department->image);
            $url = uploadFileToPublic($request->image, 'department');
            $department->update(['image' => $url]);
        }

        return responseSuccess('department', $department, 'Department Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy($department)
    {
        $department = Department::where("id", $department)->where("school_id", $this->school->id)->first();
        $department_image = $department->image;
        $deleted = $department->delete();
        $deleted ? deleteImage($department_image) : '';

        return responseSuccess('', '', 'Department Deleted successfully!');
    }
}
