<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;

class UsersController extends Controller {
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


    public function index() {

        $id = auth()->user()->id;
        $users = $this->user->users()->get();

    return $users;
    }

    public function updateSettings(Request $request) {
        $id = auth()->user()->id;

        $user = User::findOrFail($id);
        $user->name = request('name');
        $user->email = request('email');
        $user->password = request('password');
        $user->currency = request('currency');
        $user->graph_type = request('graph_type');

       
        $user->save();
        return response()->json([
            "success" => true,
            "data" => $user
        ], 200);       
    }

}
