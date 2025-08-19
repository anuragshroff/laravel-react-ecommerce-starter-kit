<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Handmade Jewelry', 'slug' => 'handmade-jewelry', 'description' => 'Beautiful handcrafted jewelry pieces'],
            ['name' => 'Pottery & Ceramics', 'slug' => 'pottery-ceramics', 'description' => 'Unique pottery and ceramic items'],
            ['name' => 'Textiles & Fabrics', 'slug' => 'textiles-fabrics', 'description' => 'Handwoven textiles and fabric art'],
            ['name' => 'Wood Crafts', 'slug' => 'wood-crafts', 'description' => 'Handcrafted wooden items'],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }
    }
}
