<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Video;
use App\Models\Hotel;
use App\Models\Category;
use App\Models\Has_category;
use Auth;
use Illuminate\Support\Facades\Response;

class VideoController extends Controller
{

	/**
	* constructor
	*/
	public function __construct()
	{
		//$this->middleware('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$videos = Video::all();
		$popular = Video::getPopularVideo();
		return View('video/index', ['videos' => $videos, 'popular' => $popular]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$user_id = Auth::user()->id;
		$hotels = Hotel::all();
		$categories = Category::all();
		return view('createVideo', ['hotels' => $hotels, 'user_id' => $user_id, 'categories' => $categories]);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		$inputs = $request->all();
    	$video = new Video($inputs);
    	if($video->save()) {
    		return Response::json(array('success' => true, 'id' => $video->id), 200);
    	}
	}

	public function storeCategories(Request $request)
	{
		$inputs = $request->all();
    	$category = new Has_category($inputs);
    	$category->save();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{

	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
}
