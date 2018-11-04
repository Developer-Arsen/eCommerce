<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;

class ProductController extends Controller
{
    public function products_list()
    {
        $product_list = Product::OrderBy('id', 'DESC')->paginate(9);
        $categories = Category::all();

        return view('front.products_list', compact('product_list', 'categories'));
    }

    // public function by_category($id){
    //     $product = Product::orderBy('id','DESC')->paginate(9);
    //     $categories =  Category::all();
    //     return view('front.products', compact('product','categories'));
    // }
    public function single_product($id)
    {
        $product = Product::find($id);
        $categories = Category::all();
        //dd( $product_info)
        // $product_info += Category::find($id);
        return view('front.single_product', compact('product', 'categories'));
    }
}
