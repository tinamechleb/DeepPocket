<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSaving_GoalRequest extends FormRequest
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
            'title' => 'required|max:255|unique:saving_goals,title,NULL,id,users_id,' . $this->users_id,
            'description' => 'required|max:500|unique:saving_goals,title,NULL,id,users_id,' . $this->users_id,
            'amount' => 'required|max:11|unique:saving_goals,title,NULL,id,users_id,' . $this->users_id,
            'users_id' => 'max:11|unique:saving_goals,title,NULL,id,users_id,' . $this->users_id,
        ];
    }
}
