<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Saving_goal extends Model
{
    protected $fillable = [
          'title' ,
          'description' ,
          'amount',
          'total_amount',
          'categories_id' ,
          'start_date',
          'start_date',
          'end_date',
          'interval',
          'type',
          'currencies_id',
          'name',
          'email',
          'image',
          'transaction_id',
          'transaction_co',
          'transaction_sy',
          'transaction_na',
    ];
}
