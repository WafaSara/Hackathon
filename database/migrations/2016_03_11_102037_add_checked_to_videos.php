<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCheckedToVideos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('videos', function (Blueprint $table) {
        $table->boolean('checked');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
