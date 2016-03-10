<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Video extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'source', 'likes', 'stars', 'hotel_id', 'user_id'
    ];

    public function hotel()
    {
        return $this->hasOne('App\Models\Hotel', 'id', 'hotel_id');
    }

    public function user()
    {
      return $this->hasOne('App\User', 'id', 'user_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'has_category', 'video_id', 'category_id');
    }

    public static function getPopularVideo()
    {
      $popular = self::where('stars', '=', '5')->first(); 
      return $popular;
    }
}
