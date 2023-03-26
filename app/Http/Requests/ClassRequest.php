<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClassRequest extends FormRequest
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
        if ($this->method() === 'POST') {
            return [
                'name' => ['required', Rule::unique('classses')->where(function ($query) {
                    return $query->where('name', $this->name)->where('school_id', school()->id);
                })],                
                'numeric' => ['required', 'digits_between:0,10', Rule::unique('classses')->where(function ($query) {
                    return $query->where('numeric', $this->numeric)->where('school_id', school()->id);
                })], 
                'sections' => 'required'
            ];
        }else{
            return [
                'name' => ['required', Rule::unique('classses')->where(function ($query) {
                    return $query->where('name', $this->name)->where('school_id', school()->id)->where("id", "!=", $this->class->id );
                })], 
                'numeric' => ['required', 'digits_between:0,10', Rule::unique('classses')->where(function ($query) {
                    return $query->where('numeric', $this->numeric)->where('school_id', school()->id)->where("id", "!=", $this->class->id );
                })], 
                'sections' => 'required'
            ];
        }
    }
}
