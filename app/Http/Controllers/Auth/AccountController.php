<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\User;
use Auth;

class AccountController extends Controller
{
    /**
    * constructor
    */
    public function __construct()
    {
      $this->middleware('auth');
    }

    public function getAccount()
    {
      print_r(Auth::user()->id); exit;
      return View('auth/account');
    }
}
