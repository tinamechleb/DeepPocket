<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'title' ,
        'description' ,
        'amount',
        'start_date',
        'end_date',
        'categories_name', 
        'categories_id',
        'users_id',
        'type', 
        'currencies_id',
        'interval',
        'recurrence',
        'created_at', 
];
}
