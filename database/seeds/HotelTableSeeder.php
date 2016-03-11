<?php

class HotelTableSeeder extends Seeder {

    public function run()
    {
        DB::table('hotels')->insert(
          array(
            array(
              'name' => 'Atlantic Hotel',
              'city' => 'Milano'
            ),
            array(
              'name' => 'Best Western Plus Suites ',
              'city' => 'Vallarta'
            ),
            array(
              'name' => 'Haiti Hotel',
              'city' => 'Haiti'
            ),
            array(
              'name' => 'Meteor Hotel',
              'city' => 'Pragues'
            ),
            array(
              'name' => 'Le Patio Saint Antoine',
              'city' => 'Paris'
            ),
            array(
              'name' => 'Marais Bastille',
              'city' => 'Paris'
            )
          )
        );
    }

}
// $table->string('name');
// $table->string('city');
