<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a test artisan user first
        $artisan = \App\Models\User::create([
            'name' => 'Test Artisan',
            'email' => 'artisan@example.com',
            'password' => bcrypt('password'),
        ]);

        $products = [
            [
                'artisan_id' => $artisan->id,
                'category_id' => 1,
                'name' => 'Silver Ring',
                'slug' => 'silver-ring',
                'description' => 'Beautiful handcrafted silver ring',
                'price' => 45.00,
                'in_stock' => true,
            ],
            [
                'artisan_id' => $artisan->id,
                'category_id' => 2,
                'name' => 'Ceramic Bowl',
                'slug' => 'ceramic-bowl',
                'description' => 'Handmade ceramic bowl perfect for serving',
                'price' => 25.00,
                'in_stock' => true,
            ],
            [
                'artisan_id' => $artisan->id,
                'category_id' => 3,
                'name' => 'Woven Scarf',
                'slug' => 'woven-scarf',
                'description' => 'Soft handwoven scarf in natural colors',
                'price' => 35.00,
                'in_stock' => true,
            ],
        ];

        foreach ($products as $product) {
            \App\Models\Product::create($product);
        }
    }
}
