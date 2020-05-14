<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use App\Http\Requests\StoreSaving_GoalRequest;
use App\Http\Requests\UpdateSaving_GoalRequest;
use JWTAuth;

class TransactionsController extends Controller {
     /*
     * @var
     */
    protected $user;
    /*
     * TransactionsController constructor.
     */
    public function __construct()
    {
        try{
            $this->user = JWTAuth::parseToken()->authenticate();

         } catch(Exception $error){

        }
    }
    public function index() {
        $userId = auth()->user()->id;
        $transactions = Transaction::latest()->where('users_id', $userId)->get();
        return $transactions;
    }

    public function show($type, $recurrence) {
        $userId = auth()->user()->id;
        $transaction = $this->user->transactions()->where('type', $type)->where('recurrence', $recurrence)->get();
        return $transaction;
    }

    public function create() {
        return 'submit form goes here';
    }

    public function store(StoreSaving_GoalRequest $request) {
        $inputs = $request->only(['title' , 'description' , 'amount', 'start_date', 'end_date', 'categories_name', 'categories_id', 'users_id', 'type','interval', 'currencies_id', 'recurrence']);
        $transaction = new Transaction();

        $transaction->title = request('title');
        $userId = auth()->user()->id;
        $transaction->users_id = $userId;

        $countTitle = Transaction::where('title', $transaction->title)->count();

        if($countTitle > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot add transaction bc there is already one with same name"
        ], 500);
        }
        else{
            $transaction->fill($inputs);
            $transaction->save();
            return response()->json([
                "success" => true,
                "data" => $transaction
            ], 200);
        }

        
    }

    public function destroy($id) {
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();
        return response()->json([
            "success" => true,
            "data" => null
        ], 200);
    }

    public function update(UpdateSaving_GoalRequest $request, $id) {
        $inputs = $request->all();
        $transaction = Transaction::findOrFail($id);
        $transaction->title = request('title');
        $transaction->description = $request->input('description');
        $transaction->amount = $request->input('amount');
        $transaction->categories_name = $request->input('categories_name');
        $transaction->categories_id = $request->input('categories_id');
        $transaction->start_date = $request->input('start_date');
        $transaction->end_date = $request->input('end_date');
        $transaction->interval = $request->input('interval');
        $transaction->type = $request->input('type');
        $transaction->recurrence = $request->input('recurrence');
        $transaction->currencies_id = $request->input('currencies_id');

        $countTitle = Transaction::where('title', $transaction->title)->where('id', '!=', $id)->count();

        if($countTitle > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot update transaction bc there is already one with same title"
        ], 500);
        }
        else{
            $transaction->save();
            return response()->json([
                "success" => true,
                "data" => $transaction
            ], 200);
        }        
    }
}
