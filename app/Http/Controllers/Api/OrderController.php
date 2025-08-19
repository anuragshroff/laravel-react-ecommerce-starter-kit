<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index()
    {
        return auth()->user()->orders()->with('items.product')->latest()->get();
    }

    public function store(Request $request)
    {
        $cartItems = auth()->user()->cartItems()->with('product')->get();
        
        if ($cartItems->isEmpty()) {
            return response()->json(['error' => 'Cart is empty'], 400);
        }

        $totalAmount = $cartItems->sum(function ($item) {
            return $item->quantity * $item->product->price;
        });

        return DB::transaction(function () use ($cartItems, $totalAmount) {
            $order = Order::create([
                'customer_id' => auth()->id(),
                'total_amount' => $totalAmount,
                'status' => 'pending',
            ]);

            foreach ($cartItems as $cartItem) {
                $order->items()->create([
                    'product_id' => $cartItem->product_id,
                    'quantity' => $cartItem->quantity,
                    'price_at_purchase' => $cartItem->product->price,
                ]);
            }

            // Clear cart after order
            Cart::where('user_id', auth()->id())->delete();

            return $order->load('items.product');
        });
    }

    public function show(Order $order)
    {
        $this->authorize('view', $order);
        return $order->load('items.product');
    }
}
