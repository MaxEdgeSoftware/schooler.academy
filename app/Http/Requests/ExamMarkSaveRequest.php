<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExamMarkSaveRequest extends FormRequest
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
            'student_data.*.exam_id'           =>  ['required', 'exists:exams,id'],
            'student_data.*.class_id'          =>  ['required', 'exists:classses,id'],
            'student_data.*.subject_id'        =>  ['required', 'exists:subjects,id'],
            'student_data.*.section_id'        =>  ['required', 'exists:sections,id'],
            'student_data.*.roll_no'           =>  ['required',],
           // 'student_data.*.class_work'              =>  ['required', 'numeric', 'max:100', 'min:0', '']
            //'student_data.*.ca'              =>  ['required', 'numeric', 'max:100', 'min:0', '']
            //'student_data.*.mark'              =>  ['required', 'numeric', 'max:100', 'min:0', '']

        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [

             // class_work messages
             'student_data.*.class_work.required'   =>  'The class_work field is required.',
             'student_data.*.class_work.max'   =>  'class_work may not be greater than 100.',
             'student_data.*.class_work.min'   =>  'class_work may not be greater less 0.',
             'student_data.*.class_work.numeric'   =>  'class_work must be number',

            // ca messages
            'student_data.*.ca.required'   =>  'The ca field is required.',
            'student_data.*.ca.max'   =>  'ca may not be greater than 100.',
            'student_data.*.ca.min'   =>  'ca may not be greater less 0.',
            'student_data.*.ca.numeric'   =>  'ca must be number',

            // marks messages
            'student_data.*.mark.required'   =>  'The mark field is required.',
            'student_data.*.mark.max'   =>  'mark may not be greater than 100.',
            'student_data.*.mark.min'   =>  'mark may not be greater less 0.',
            'student_data.*.mark.numeric'   =>  'mark must be number',

        ];
    }
}
