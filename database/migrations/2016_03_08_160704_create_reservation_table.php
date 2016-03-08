<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
          $table->increments('id');
          $table->date('checkin');
          $table->date('checkout');
          $table->integer('user_id')->unsigned();
          $table->integer('hotel_id')->unsigned();
          $table->foreign('user_id')->references('id')->on('users');
          $table->foreign('hotel_id')->references('id')->on('hotels');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('reservations');
    }
}
