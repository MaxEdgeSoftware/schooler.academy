<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Calendar;
use App\Http\Controllers\Controller;
use App\Http\Requests\CalendarRequest;
use App\Http\Resources\Calendar\CalendarResource;
use App\Http\Resources\Calendar\UpcomingEventResource;

class CalendarController extends Controller
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
        $calendars = Calendar::where("school_id", $this->school->id)->get();

        return CalendarResource::collection($calendars);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CalendarRequest $request)
    {
        $data = $request->validated();
        $data['session_id'] = currentSession();
        $data['school_id'] = school()->id;
        $calendar = Calendar::create($data);
        return responseSuccess('calendar', $calendar, 'Calendar created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function show(Calendar $calendar)
    {
        return new CalendarResource($calendar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function update(CalendarRequest $request, Calendar $calendar)
    {
        $calendar->update($request->validated());
        return responseSuccess('calendar', $calendar, 'Calendar updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function destroy($calendar)
    {
        $calendar = Calendar::find($calendar);
        $calendar->delete();

        return responseSuccess('calendar', $calendar, 'Calendar deleted successfully!');
    }

    public function upcomingEvents(){
        $calendars = Calendar::whereSessionId(currentSession())
        ->where('start_date', '>', now()->format('Y-m-d'))
        ->where("school_id", $this->school->id)
        ->oldest('start_date')
        ->take(3)
        ->get();

        return UpcomingEventResource::collection($calendars);
    }
}
