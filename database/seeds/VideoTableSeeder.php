<?php

class VideoTableSeeder extends Seeder {

    public function run()
    {
        DB::table('videos')->insert(
          array(
            array(
              'sources' => 'https://www.facebook.com/gestestdiw/videos/488367908029434/',
              'likes' => '1',
              'stars' => '3',
              'hotel_id' => '3',
              'user_id' => '1',
              'checked' => '1'
            ),
            array(
              'sources' => 'https://www.facebook.com/gestestdiw/videos/488375204695371/',
              'likes' => '1',
              'stars' => '3',
              'hotel_id' => '4',
              'user_id' => '2',
              'checked' => '1'
            ),
            array(
              'sources' => 'https://www.facebook.com/gestestdiw/videos/488375588028666/',
              'likes' => '1',
              'stars' => '3',
              'hotel_id' => '2',
              'user_id' => '3',
              'checked' => '1'
            ),
            array(
              'sources' => 'https://www.facebook.com/gestestdiw/videos/488486624684229/',
              'likes' => '1',
              'stars' => '3',
              'hotel_id' => '1',
              'user_id' => '4',
              'checked' => '1'
            ),
          )
        );
    }

}
sources
likes
stars
hotel_id
user_id
checked
