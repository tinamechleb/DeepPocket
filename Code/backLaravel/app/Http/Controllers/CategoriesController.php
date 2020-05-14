<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use JWTAuth;

class CategoriesController extends Controller {
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

        $userId = auth()->user()->id;

        // $categories = Category::latest()->where('users_id', $userId)->get();
       $categories = $this->user->categories()->get();

    return $categories;
    }

    public function show($type) {
        $userId = auth()->user()->id;

        // $categories = Category::latest()->where('users_id', $userId)->get();
       $categoriesByType = $this->user->categories()->where('type', $type)->get();

        return $categoriesByType;
    }

    public function create() {
        return 'submit form goes here';
    }

    public function store(StoreCategoryRequest $request) {

        $inputs = $request->only(['name','color', 'type']);
        $category = new Category();
        $category->name = request('name');
        $category->color = request('color');
        $category->type = request('type');
        $userId = auth()->user()->id;
        $category->users_id = $userId;

        $countName = Category::where('name', $category->name)->count();
        $countColor = Category::where('color', $category->color)->count();

        if($countName > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot add category bc there is already one with same name"
        ], 500);
        }
        else if($countColor > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot add category bc there is already one with same color"
        ], 500);
        }
        else {
            $category->fill($inputs);
            $category->save();
            return response()->json([
                "success" => true,
                "data" => $category
            ], 200);
        }
        
    }

    public function destroy($id) {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json([
            "success" => true,
            "data" => null
        ], 200);
    }

    public function update(UpdateCategoryRequest $request, $id) {
        $inputs = $request->all();
        $category = Category::findOrFail($id);
        $category->name = request('name');
        $category->color = request('color');
        $category->type = request('type');

        $countName = Category::where('name', $category->name)->where('id', '!=', $id)->count();
        $countColor = Category::where('color', $category->color)->where('id', '!=', $id)->count();

        if($countName > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot update category bc there is already one with same name"
        ], 500);
        }
        else if($countColor > 0) { 
            return response()->json([
            "success" => false,
            "message" => "cannot update category bc there is already one with same color"
        ], 500);
        }
        else{
            $category->save();
            return response()->json([
                "success" => true,
                "data" => $category
            ], 200);
        }        
    }

}
