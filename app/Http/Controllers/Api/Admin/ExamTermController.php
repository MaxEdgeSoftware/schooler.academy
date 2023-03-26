<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExamTermRequest;
use App\Http\Resources\Exam\ExamResource;
use App\Http\Resources\Exam\ExamTermResource;
use App\Models\ExamTerm;

class ExamTermController extends Controller
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
        $terms = ExamTerm::where("school_id", $this->school->id)->get();

        return ExamTermResource::collection($terms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExamTermRequest $request)
    {
        $term = ExamTerm::create($request->all()+["school_id" => $this->school->id]);

        return responseSuccess('term', $term, 'Term create successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ExamTerm  $examTerm
     * @return \Illuminate\Http\Response
     */
    public function show(ExamTerm $examTerm)
    {
        return new ExamTermResource($examTerm);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ExamTerm  $examTerm
     * @return \Illuminate\Http\Response
     */
    public function update(ExamTermRequest $request, ExamTerm $examTerm)
    {
        $examTerm->update($request->all());

        return responseSuccess('term', $examTerm, 'Term update successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ExamTerm  $examTerm
     * @return \Illuminate\Http\Response
     */
    public function destroy($examTerm)
    {
        $examTerm = ExamTerm::find($examTerm);
        $examTerm->delete();

        return responseSuccess('term', null, 'Term delete successfully!');
    }

    /**
     * Get Term Exams
     */
    public function getExamByTerm(ExamTerm $term)
    {
        return ExamResource::collection($term->exams);
    }

    public function fetchAllTerms()
    {
        $terms = ExamTerm::where("school_id", $this->school->id)->get(['id', 'name']);
        return responseSuccess('terms', $terms);
    }
}
