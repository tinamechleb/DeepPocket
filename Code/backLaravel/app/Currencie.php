<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currencie extends Model
{
    protected $fillable = [
        'country' , 'symbol' , 'name' ,'code'
    ];
    
}
