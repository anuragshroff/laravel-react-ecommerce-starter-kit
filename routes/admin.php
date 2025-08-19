<?php

use App\Http\Controllers\Admin\Auth\AdminAuthController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Admin Authentication Routes
Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('admin.login');
Route::post('/login', [AdminAuthController::class, 'login']);
Route::get('/register', [AdminAuthController::class, 'showRegister'])->name('admin.register');
Route::post('/register', [AdminAuthController::class, 'register']);

// Protected Admin Routes
Route::middleware(['auth:admin'])->group(function () {
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
    
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/index', [
            'stats' => [
                'totalProducts' => \App\Models\Product::count(),
                'totalUsers' => \App\Models\User::count(),
                'totalCategories' => \App\Models\Category::count(),
                'totalOrders' => 0,
            ],
            'recentProducts' => \App\Models\Product::with(['category', 'artisan'])->latest()->take(5)->get(),
            'recentUsers' => \App\Models\User::latest()->take(5)->get()
        ]);
    })->name('admin.dashboard');

    // Products Management
    Route::get('/products', function () {
        return Inertia::render('admin/products/index', [
            'products' => \App\Models\Product::with(['category', 'artisan'])->latest()->paginate(10)
        ]);
    })->name('admin.products.index');
    Route::get('/products/create', function () {
        return Inertia::render('admin/products/create');
    })->name('admin.products.create');
    Route::post('/products', function (\Illuminate\Http\Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
        }
        \App\Models\Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image_url' => $imagePath ? '/storage/' . $imagePath : null,
            'artisan_id' => auth('admin')->id(),
        ]);
        return redirect()->route('admin.products.index');
    })->name('admin.products.store');
    Route::get('/products/{product}/edit', function (\App\Models\Product $product) {
        return Inertia::render('admin/products/edit', ['product' => $product]);
    })->name('admin.products.edit');
    Route::put('/products/{product}', function (\Illuminate\Http\Request $request, \App\Models\Product $product) {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);
        $imagePath = $product->image_url;
        if ($request->hasFile('image')) {
            $imagePath = '/storage/' . $request->file('image')->store('products', 'public');
        }
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image_url' => $imagePath,
        ]);
        return redirect()->route('admin.products.index');
    })->name('admin.products.update');

    // Categories Management
    Route::get('/categories', [CategoryController::class, 'list_categories'])->name('admin.categories.index');
    Route::post('/categories', [CategoryController::class, 'save_category'])->name('admin.categories.save');
    
    // Users Management
    Route::get('/users', function () {
        return Inertia::render('admin/users', [
            'users' => \App\Models\User::latest()->paginate(10)
        ]);
    })->name('admin.users.index');
    Route::get('/users/create', function () {
        return Inertia::render('admin/users/create');
    })->name('admin.users.create');
    Route::post('/users', function (\Illuminate\Http\Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);
        \App\Models\User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);
        return redirect()->route('admin.users.index');
    })->name('admin.users.store');
    Route::get('/users/{user}/edit', function (\App\Models\User $user) {
        return Inertia::render('admin/users/edit', ['user' => $user]);
    })->name('admin.users.edit');
    Route::put('/users/{user}', function (\Illuminate\Http\Request $request, \App\Models\User $user) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password ? \Hash::make($request->password) : $user->password,
        ]);
        return redirect()->route('admin.users.index');
    })->name('admin.users.update');
    
    // Orders Management
    Route::get('/orders', function () {
        return Inertia::render('admin/orders', [
            'orders' => []
        ]);
    })->name('admin.orders.index');
    
    // Analytics
    Route::get('/analytics', function () {
        return Inertia::render('admin/analytics', [
            'analytics' => [
                'productsByCategory' => \App\Models\Product::selectRaw('categories.name, COUNT(*) as count')
                    ->join('categories', 'products.category_id', '=', 'categories.id')
                    ->groupBy('categories.name')
                    ->get(),
                'recentActivity' => \App\Models\Product::with(['category', 'artisan'])->latest()->take(10)->get()
            ]
        ]);
    })->name('admin.analytics.index');
    
    // Payment Gateway Management
    Route::get('/payments', function () {
        return Inertia::render('admin/payments', [
            'gateways' => [], // Add payment gateway data
            'transactions' => [] // Add transaction data
        ]);
    })->name('admin.payments.index');
    
    // Finance Management
    Route::get('/finance', function () {
        return Inertia::render('admin/finance', [
            'commissions' => [],
            'payouts' => [],
            'reports' => []
        ]);
    })->name('admin.finance.index');
    
    // Logistics Management
    Route::get('/logistics', function () {
        return Inertia::render('admin/logistics', [
            'inventory' => [],
            'shipping' => [],
            'warehouses' => []
        ]);
    })->name('admin.logistics.index');
    
    // Marketing Management
    Route::get('/marketing', function () {
        return Inertia::render('admin/marketing', [
            'campaigns' => [],
            'flashSales' => [],
            'promotions' => []
        ]);
    })->name('admin.marketing.index');
});