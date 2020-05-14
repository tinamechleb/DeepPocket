<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//categories Routes
Route::get('/categories', 'CategoriesController@index');
Route::get('/categories/create', 'CategoriesController@create');
Route::post('/categories', 'CategoriesController@store'); 
Route::get('/categories/{id}', 'CategoriesController@show');
Route::delete('categories/{id}', 'CategoriesController@destroy');
Route::patch('categories/{id}', 'CategoriesController@update');

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
Route::get('/transactions/{id}', 'TransactionsController@show');
Route::delete('transactions/{id}', 'TransactionsController@destroy');
Route::patch('transactions/{id}', 'TransactionsController@update');

//Calculation functions Routes
Route::get('/incomes', 'CalculationController@sumIncomes');  
Route::get('/expenses', 'CalculationController@sumExpenses');  
Route::get('/savingGoals', 'CalculationController@sumAmountOfSavingGoals'); // to give me sum of savingGoals'amount
Route::get('/sumAmountOfcategory', 'CalculationController@sumAmountOfcategory'); // to give me sum of savingGoals'amount
Route::get('/yearlyIncomes',   'CalculationController@sumYearlyIncomes');  
Route::get('/monthlyIncomes',  'CalculationController@sumMonthlyIncomes');  
Route::get('/yearlyExpenses',  'CalculationController@sumYearlyExpenses');  
Route::get('/monthlyExpenses', 'CalculationController@sumMonthlyExpenses');  


