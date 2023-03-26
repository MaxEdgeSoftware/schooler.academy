<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoleFormRequest extends FormRequest
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
                // 'name' => 'required|unique:roles,name',
                'name' => ['required', Rule::unique('roles')->where(function ($query) {
                    return $query->where('name', $this->name)->where('school_id', school()->id);
                })], 
                'permission' => 'required',
            ];
        }else{
            return [
                // 'name' => "required|unique:roles,name,{$this->role->id}",
                'name' => ['required', Rule::unique('roles')->where(function ($query) {
                    return $query->where('name', $this->name)->where('school_id', school()->id)->where("id", "!=", $this->role->id);
                })], 
                'permission' => 'required',
            ];
        }
    }
}
