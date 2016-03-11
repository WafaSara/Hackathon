<?php

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->insert(
          array(
            array(
              'name' => 'Moore Daoust',
              'email' => 'MooreDaoust@gmail.com',
              'password' => 'monsupermotdepasse'
            ),
            array(
              'name' => 'Fortun Lamarre',
              'email' => 'FortunLamarre@gmail.com',
              'password' => 'monsupermotdepasse'
            ),
            array(
              'name' => 'Paulette Lavoie',
              'email' => 'PauletteLavoie@gmail.com',
              'password' => 'monsupermotdepasse'
            ),
            array(
              'name' => 'Pascaline Quessy',
              'email' => 'PascalineQuessy@gmail.com',
              'password' => 'monsupermotdepasse'
            ),
            array(
              'name' => 'Varden Paradis',
              'email' => 'VardenParadis@gmail.com',
              'password' => 'monsupermotdepasse'
            ),
            array(
              'name' => 'admin',
              'email' => 'admin@gmail.com',
              'password' => 'adminaccess'
            ),
            array(
              'name' => 'demo',
              'email' => 'demo@gmail.com',
              'password' => 'demoaccess'
            )
          )
        );
    }
}
// $table->string('name');
// $table->string('email')->unique();
// $table->string('password', 60);
