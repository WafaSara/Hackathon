<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//Home route
Route::get('/', 'HomeController@index')->name('home');


//Gallery routes
Route::get('video/index', 'VideoController@index')->name('video');

// Account

Route::get('auth/account', 'Auth\AccountController@getAccount')->name('account');

//

//Route::resource('video', 'VideoController');


Route::resource('video', 'VideoController');
Route::post('video/store', 'VideoController@store');



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {

  // Authentication routes...
  Route::get('auth/login', 'Auth\AuthController@getLogin')->name('login');
  Route::post('auth/login', 'Auth\AuthController@postLogin');
  Route::get('auth/logout', 'Auth\AuthController@getLogout')->name('logout');

  // Registration routes...
  Route::get('auth/register', 'Auth\AuthController@getRegister');
  Route::post('auth/register', 'Auth\AuthController@postRegister');
});
