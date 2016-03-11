<?php

class CategoryTableSeeder extends Seeder {

    public function run()
    {
        DB::table('categories')->insert(
          array(
            array(
              'label' => 'Affaire'
            ),
            array(
              'label' => 'Famille'
            ),
            array(
              'label' => 'Amis'
            ),
            array(
              'label' => 'Loisir'
            )
          )
        );
    }

}
