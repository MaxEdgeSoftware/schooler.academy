<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Session;
use App\Models\AdminSetting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SessionRequest;
use App\Http\Resources\Session\SessionResource;
use App\Models\Classs;

class SessionController extends Controller
{
    public $school;

    public function __construct()
    {
        $this->school = school();
    }
    /**
     * Get all session year.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSessionYear()
    {
        return response()->json(
            [
                'sessions' => Session::latest()->where("school_id", $this->school->id)->get(['id', 'name']),
                'selectedSession' => ["default_session_id" => school()->default_session_id],
            ]
        );
    }

    /**
     * Get all session year.
     *
     * @return \Illuminate\Http\Response
     */
    public function setSessionYear($session_id)
    {
        school()->update(['default_session_id' => $session_id]);
        return response()->json(['message' => 'Academic Session year updated successfully.']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sessions = Session::where("school_id", $this->school->id)->latest()->get();

        return SessionResource::collection($sessions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  SessionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SessionRequest $request)
    {
        $session = Session::create($request->all()+["school_id" => $this->school->id]);

        return responseSuccess('session', $session, 'Session create successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Session  $session
     * @return \Illuminate\Http\Response
     */
    public function show(Session $session)
    {
        return new SessionResource($session);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  SessionRequest  $request
     * @param  \App\Models\Session  $session
     * @return \Illuminate\Http\Response
     */
    public function update(SessionRequest $request, Session $session)
    {
        $session->update($request->all());

        return responseSuccess('session', $session, 'Session update successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Session  $session
     * @return \Illuminate\Http\Response
     */
    public function destroy($session)
    {
        $session = Session::find($session);
        $session->delete();

        return responseSuccess(null, 'Session delete successfully!');
    }

    public function getCurrentSession()
    {
        return Session::select('id', 'name')->where("school_id", $this->school->id)->findOrFail(currentSession());
    }

    public function getClasses($session_id)
    {
        $classes = Classs::whereSessionId($session_id)->where("school_id", $this->school->id)->get();
        return response()->json(['classes' => $classes]);
    }
}
