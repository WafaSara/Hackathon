<?php

class HasCategoryTableSeeder extends Seeder {

    public function run()
    {
        DB::table('has_category')->insert(
          array(
            array(
              'video_id' => '1',
              'category_id' => '1'
            ),
            array(
              'video_id' => '1',
              'category_id' => '2'
            ),
            array(
              'video_id' => '2',
              'category_id' => '3'
            ),
            array(
              'video_id' => '2',
              'category_id' => '4'
            ),
            array(
              'video_id' => '3',
              'category_id' => '1'
            ),
            array(
              'video_id' => '3',
              'category_id' => '2'
            ),
            array(
              'video_id' => '3',
              'category_id' => '3'
            ),
          )
        );
    }

}
