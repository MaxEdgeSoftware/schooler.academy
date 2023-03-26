<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClassRoomRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'room_no' => ['required', Rule::unique('class_rooms')->where(function ($query) {
                return $query->where('room_no', $this->room_no)->where('school_id', school()->id);
            })], 
            'capacity' => 'required|numeric',
        ];
    }
}
