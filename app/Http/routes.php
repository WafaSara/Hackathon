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




//

//Route::resource('video', 'VideoController');



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
  //Gallery routes
  Route::get('video/index', 'VideoController@index')->name('video');
  Route::post('video/store', ['uses' => 'VideoController@store', 'middleware' => 'auth']);
  Route::post('video/storeCategories', ['uses' => 'VideoController@storeCategories', 'middleware' => 'auth']);

  Route::get('video/create', ['uses' => 'VideoController@create', 'middleware' => 'auth'])->name('video-create');

  Route::get('hotels/index', 'HotelController@index')->name('hotels');

  // Account
  Route::get('auth/account', 'Auth\AccountController@getAccount')->name('account');

  // Authentication routes...
  Route::get('auth/login', 'Auth\AuthController@getLogin')->name('login');
  Route::post('auth/login', 'Auth\AuthController@postLogin');
  Route::get('auth/logout', 'Auth\AuthController@getLogout')->name('logout');

  // Registration routes...
  Route::get('auth/register', 'Auth\AuthController@getRegister');
  Route::post('auth/register', 'Auth\AuthController@postRegister');
});
