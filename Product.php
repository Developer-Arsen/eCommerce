<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{

    public function Category_Name()
    {
        return $this->belongsTo('App\Category', 'category_id', 'id');
    }



    protected $fillable = ['title', 'availability', 'condition', 'quantity', 'price', 'slug', 'posters', 'category_id'];



    }

