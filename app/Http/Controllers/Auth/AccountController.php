<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Models\User;

class AccountController extends Controller
{
    /**
    * constructor
    */
    public function __construct()
    {
      //$this->middleware('auth');
    }

    public function getAccount()
    {
      return View('auth/account');
    }
}
