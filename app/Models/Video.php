<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
