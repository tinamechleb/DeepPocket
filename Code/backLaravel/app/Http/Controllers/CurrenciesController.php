<?php

namespace App\Http\Controllers;
use App\Currencie;

use Illuminate\Http\Request;

class CurrenciesController extends Controller{


// We will need it if we would allow user to choose from a list of Currencies
    public function index() {
        $currencies = Currencie::latest()->get();
        return $currencies;
    }


// We will need it to display the Currency in many places 
    public function show($id) {
        $currencie = Currencie::findOrFail($id); 
        return $currencie;
    }

    public function create() {
        return 'submit by setting form here';
    }

//Create new currency
public function store(Request $request){
        $inputs = $request->only(['country', 'symbol','name','code']);
        $currenci = new Currencie();
        $currenci->fill($inputs);
        $currenci->save();
        return response()->json([
            "success" => true,
            "data" => null
        ], 200);
    }

   //Update We will need it when user  change  his Currency
  
  public function update(Request $request,$id){
    if($request->isMethod('post')){
      $currencie= Currencie::find($id);
      $currencie->country = $request->input('country');
      $currencie->symbol = $request->input('symbol');
      $currencie->name = $request->input('name');
      $currencie->code = $request->input('code');
      $currencie->save();
      return response()->json([
                "success" => true,
                "data" => null
            ], 200);    }
    else{
        return response()->json([
            "success" => false,
            "data" => null
        ], 400);    }
    }

 //maybe we will not use it Because user just need to update his currency not delete 
 public function destroy($id) {
    $currencie = Currencie::findOrFail($id);
    $currencie->delete();
    return 'deleting was successful';
}
}




 // public function update(Request $request ,$id){
    //     $inputs = $request->all();
    //     $currencie = Currencie::findOrFail($id);
    //     $currencie->country = request('country');
    //     $currencie->symbol = request('symbol');
    //     $currencie->name = request('name');
    //     $currencie->code = request('code');

    //     $currencie->save();
    //     return response()->json([
    //         "success" => true,
    //         "data" => null
    //     ], 200);
    // }

    //----------------------------------------------

    // public function update(Request $request)
    // {
    //     $currencie = Currencie::find($request->input('id'));
    //     $currencie->country = $request->input('country');
    //     $currencie->symbol = $request->input('symbol');
    //     $currencie->name = $request->input('name');
    //     $currencie->code = $request->input('code');
    //     $currencie->save(); 
    //     return response()->json([
    //         "success" => true,
    //         "data" => null
    //     ], 200);
    // }

   //----------------------------------------------