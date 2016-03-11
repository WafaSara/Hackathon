<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //table users
        $this->call(UserTableSeeder::class);
        $this->command->info('User table seeded!');

        //table categories
        $this->call(CategoryTableSeeder::class);
        $this->command->info('Categories table seeded!');

        //has hotels
        $this->call(HotelTableSeeder::class);
        $this->command->info('Hotel table seeded!');
        
        //table reservations
        $this->call(ReservationTableSeeder::class);
        $this->command->info('Reservations table seeded!');

        //table has_category
        $this->call(HasCategoryTableSeeder::class);
        $this->command->info('Has_Category table seeded!');

        //table videos
        $this->call(VideoTableSeeder::class);
        $this->command->info('Videos table seeded!');

    }
}
