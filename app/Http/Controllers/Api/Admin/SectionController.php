<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Classs;
use App\Models\Section;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Section\ClassSectionResource;

class SectionController extends Controller
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
        return responseSuccess('sections', Section::where('school_id', $this->school->id)->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetchAllSections()
    {
        return responseSuccess('sections', Section::where("school_id", $this->school->id)->get(['id', 'name']));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'capacity' => 'required|numeric'
        ]);

        $isSection = Section::where("name", $request->name)->where("school_id", $this->school->id)->first();
        if($isSection){
            return responseError("Section already exist", 322);
        }
        try {
            $data = $request->all();
            $data["school_id"] = $this->school->id;
            $section = Section::create($data);

            return responseSuccess('section', $section, 'Section Created Successfully');
        } catch (\Throwable $th) {
            return responseError($th->getMessage(), 403);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Section $section)
    {
        $this->validate($request, [
            'name' => "required|unique:sections,name,$section->id",
            'capacity' => 'required|numeric'
        ]);

        try {
            $section->update($request->all());

            return responseSuccess('section', $section, 'Section Updated Successfully');
        } catch (\Throwable $th) {
            return responseError($th->getMessage(), 403);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($section)
    {
        $section = Section::where("id", $section)->first();
        try {
            $section->delete();

            return responseSuccess('', '', 'Section Deleted Successfully');
        } catch (\Throwable $th) {
            return responseError($th->getMessage(), 403);
        }
    }

    public function classSection(Classs $class)
    {
        $sections = $class->load('sections')->sections;

        return ClassSectionResource::collection($sections);
    }
}
