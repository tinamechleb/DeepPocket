<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use App\Saving_goal;
use App\Category;
use Carbon\Carbon;
use JWTAuth;


class CalculationController extends Controller {
/*
     * @var
     */
    protected $user;
    /*
     * CategoriesController constructor.
     */
    public function __construct()
    {
        try{
            $this->user = JWTAuth::parseToken()->authenticate();

         } catch(Exception $error){

        }
    }

//-----------------------------------------------------------------------------------
    public function sumIncomes() {
        $userId = auth()->user()->id; // give me one user 
            $amounts = Transaction::where([ ['users_id', $userId], ['type', 'income'] ])->get()->pluck('amount');
                      $sum =$amounts->sum();
        return $sum; //its a sum of amounts for one user with incomes type
    }
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------

    public function sumExpenses() {
        $userId = auth()->user()->id; // give me one user 
        $amounts = Transaction::where([ ['users_id', $userId], ['type', 'expense'] ])->get()->pluck('amount');
        $sum =$amounts->sum();
        return $sum; //its a sum of amounts for one user with expenses type
    }
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------

public function sumAmountOfSavingGoals() {
    $userId = auth()->user()->id; // give me one user 
        $amounts = Saving_goal::where('users_id', $userId)->get()->pluck('amount');
                  $sum =$amounts->sum();
   
    return $sum; //its a sum of amounts for one user with expenses type
}
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
public function sumAmountOfcategory($type ,$id) {
    $userId = auth()->user()->id; 
    $sum = Transaction::where('type', $type)->where('categories_id', $id)->sum('transactions.amount');
    return $sum; 
}
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
public function sumYearly($type) {
    $date  = $this->user->transactions()->where('type', $type)->get()->pluck('start_date');
    $transyear = Carbon::createFromFormat('Y-m-d', $date[0])->year;
    $now = Carbon::now();
    $year = $now->year;
    if($transyear == $year){
        $sum = $this->user->transactions()->where('type', $type)->sum('amount');
        return $sum; 
    }
    
       $amounts = Transaction::where([ ['users_id', $userId], ['type', 'income'] ,[ 'created_at',"2020" ] ])->get()->pluck('amount');
       $sum =$amounts->sum();
    return $sum; 
}
//-----------------------------------------------------------------------------------

public function sumMonthly($type) {
    $date  = $this->user->transactions()->where('type', $type)->get()->pluck('start_date');
    $transmonth = Carbon::createFromFormat('Y-m-d', $date[0])->month;
    $now = Carbon::now();
    $month = $now->month;
    if($transmonth == $month){
        $sum = $this->user->transactions()->where('type', $type)->sum('amount');
        return $sum; 
    }
}





// Route::get('/yearlyIncomes',   'CalculationController@sumYearlyIncomes');  
// Route::get('/monthlyIncomes',  'CalculationController@sumMonthlyIncomes');  
// Route::get('/yearlyExpenses',  'CalculationController@sumYearlyExpenses');  
// Route::get('/monthlyExpenses', 'CalculationController@sumMonthlyExpenses');  
}
