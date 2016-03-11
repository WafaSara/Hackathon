<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Has_category extends Model 
{

	protected $table = "has_category";
	public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'video_id', 'category_id'
    ];

}