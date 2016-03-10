<?php

namespace App\Http\Controllers\Gallery;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class GalleryController extends Controller
{
    //
    public function index()
    {
      return View('gallery/index');
    }
}
