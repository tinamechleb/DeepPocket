<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('/logout', 'AuthController@logout');
    
//user Routes
Route::get('/usersettings', 'UsersController@index');
Route::post('/usersettings', 'UsersController@updateSettings');

//categories Routes
Route::get('/categories', 'CategoriesController@index');
Route::get('/categories/create', 'CategoriesController@create');
Route::post('/categories', 'CategoriesController@store'); 
Route::get('/categories/{type}', 'CategoriesController@show');
Route::delete('categories/{id}', 'CategoriesController@destroy');
Route::post('categories/{id}', 'CategoriesController@update');

//currencies Routes
Route::get('/currencies', 'CurrenciesController@index');
Route::get('/currencies/create', 'CurrenciesController@create');
Route::post('/currencies', 'CurrenciesController@store'); 
Route::get('/currencies/{id}', 'CurrenciesController@show');
Route::delete('currencies/{id}', 'CurrenciesController@destroy');
Route::post('currencies/{id}', 'CurrenciesController@update');

//saving_goals Routes
Route::get('/saving_goals'          ,'Saving_goalsController@index');
Route::get('/saving_goals/create'   ,'Saving_goalsController@create');
Route::post('/saving_goals'         ,'Saving_goalsController@store'); 
Route::get('/saving_goals/{id}'     ,'Saving_goalsController@show');
Route::delete('saving_goals/{id}'   ,'Saving_goalsController@destroy');
Route::post('saving_goals/{id}'     ,'Saving_goalsController@update');

//transactions Routes
Route::get('/transactions', 'TransactionsController@index');
Route::get('/transactions/create', 'TransactionsController@create');
Route::post('/transactions', 'TransactionsController@store'); 
Route::get('/transactions/{type}/{recurrence}', 'TransactionsController@show');
Route::delete('transactions/{id}', 'TransactionsController@destroy');
Route::post('transactions/{id}', 'TransactionsController@update');

//Calculation functions Routes
Route::get('/sum/incomes', 'CalculationController@sumIncomes');
Route::get('/sum/expenses', 'CalculationController@sumExpenses');  
Route::get('/sum/savinggoals', 'CalculationController@sumAmountOfSavingGoals');
Route::get('/sum/categories/{type}/{id}', 'CalculationController@sumAmountOfcategory');
Route::get('/yearly/{type}',   'CalculationController@sumYearly');  
Route::get('/monthly/{type}',  'CalculationController@sumMonthly');  
});

Route::get('/test/{id}', function ($id){
    return myFunction($id);
});
