<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HotelController extends Controller
{
    /**
     *
     */
    public function index()
    {
      return View('hotels');
    }
}
