<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Saving_goal;
use App\Http\Requests\StoreSaving_GoalRequest;
use App\Http\Requests\UpdateSaving_GoalRequest;

class Saving_goalsController extends Controller
{
    public function index() {
        $userId = auth()->user()->id;
        $saving_goals = Saving_goal::latest()->where('users_id', $userId)->get();
        // $saving_goals = Saving_goal::latest()->get();
        return $saving_goals;
    }

    public function show($id) {
        $saving_goals = Saving_goal::findOrFail($id); 
        return $saving_goals;
    }

    public function create() {
        return 'submit by setting form here';
    }

    //Create new Saving_goal
    public function store(StoreSaving_GoalRequest $request){
        $inputs = $request->only([
      
              'title' ,
              'description' ,
              'amount',
              'total_amount',
              'categories_id' ,
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
        ]);
        $saving_goal = new Saving_goal();
        $saving_goal->title = request('title');
        $userId = auth()->user()->id;
        $saving_goal->users_id = $userId;
        $countTitle = Saving_Goal::where('title', $saving_goal->title)->count();

        if($countTitle > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot add saving goal bc there is already one with same name"
        ], 500);
        }
        else {
            $saving_goal->fill($inputs);
            $saving_goal->save();
            return response()->json([
                "success" => true,
                "data" => null
            ], 200);
        }
        
        
    }

      //Update We will need it when user  change  his Currency
  
  public function update(UpdateSaving_GoalRequest $request,$id){
    if($request->isMethod('post')){
      $saving_goal= Saving_goal::find($id);
    
    //   $saving_goal->country = $request->input('id');
      $saving_goal->title = $request->input('title');
      $saving_goal->description = $request->input('description');
      $saving_goal->amount = $request->input('amount');
      $saving_goal->total_amount = $request->input('total_amount');
      $saving_goal->categories_id = $request->input('categories_id');
      $saving_goal->start_date = $request->input('start_date');
      $saving_goal->end_date = $request->input('end_date');
      $saving_goal->interval = $request->input('interval');
      $saving_goal->type = $request->input('type');
      $saving_goal->currencies_id = $request->input('currencies_id');
      $saving_goal->name = $request->input('name');
      $saving_goal->email = $request->input('email');
      $saving_goal->image = $request->input('image');
      $saving_goal->transaction_id = $request->input('transaction_id');
      $saving_goal->transaction_co = $request->input('transaction_co');
      $saving_goal->transaction_sy = $request->input('transaction_sy');
      $saving_goal->transaction_na = $request->input('transaction_na');

      $countTitle = Saving_goal::where('title', $saving_goal->title)->where('id', '!=', $id)->count();

      if($countTitle > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot update saving goal bc there is already one with same title"
        ], 500);
        }
        else {
            $saving_goal->save();
            return response()->json([
                    "success" => true,
                    "data" => null
                ], 200);    }
        }
    else{
        return response()->json([
            "success" => false,
            "data" => null
        ], 400);    }
    }

   public function destroy($id) {
        $saving_goal = Saving_goal::findOrFail($id);
        $saving_goal->delete();
        return response()->json([
            "success" => true,
            "data" => null
        ], 200);
    }


}
