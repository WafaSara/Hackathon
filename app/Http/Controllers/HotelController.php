<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Video;

class HotelController extends Controller
{
    /**
     *
     */
    public function index()
    {
    	$videos = Video::limit(2);
      return View('hotels', ['videos' => $videos]);
    }
}
