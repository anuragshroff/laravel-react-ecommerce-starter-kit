<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Shop\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('home');
});

Route::get('/home', function () {
    return Inertia::render('home', [
        'categories' => \App\Models\Category::take(6)->get(),
        'featuredProducts' => \App\Models\Product::with(['category', 'artisan'])->take(8)->get(),
        'newArrivals' => \App\Models\Product::with(['category', 'artisan'])->latest()->take(4)->get(),
        'bestSellers' => \App\Models\Product::with(['category', 'artisan'])->take(4)->get()
    ]);
})->name('home');


Route::get('/products/{slug}', [HomeController::class,'show_detail'])->name('detail');
Route::get('/products', function () {
    return Inertia::render('products', [
        'products' => \App\Models\Product::with(['category', 'artisan'])->get()
    ]);
})->name('products');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/cart', function () {
        return Inertia::render('cart');
    })->name('cart');
    
    Route::get('/orders', function () {
        return Inertia::render('orders');
    })->name('orders');
    
    Route::get('/create-product', function () {
        return Inertia::render('create-product', [
            'categories' => \App\Models\Category::all()
        ]);
    })->name('create-product');
    
    Route::get('/my-products', function () {
        return Inertia::render('dashboard/products/index', [
            'products' => \App\Models\Product::where('artisan_id', auth()->id())->get()
        ]);
    })->name('my-products');
    
    Route::get('/categories', function () {
        return Inertia::render('dashboard/categories/index', [
            'categories' => \App\Models\Category::all()
        ]);
    })->name('categories');
    
    Route::post('/dashboard/categories', [CategoryController::class, 'save_category'])->name('dashboard.categories.store');
});


// User Dashboard (Simple)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('user/dashboard', [
            'user' => auth()->user(),
            'recentOrders' => [], // Add when Order model is available
        ]);
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// Admin Routes
Route::prefix('admin')->name('admin.')->group(base_path('routes/admin.php'));
