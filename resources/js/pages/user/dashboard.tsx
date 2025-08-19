import ShopFrontLayout from '@/layouts/shop-front-layout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, ShoppingCart, User, Plus } from 'lucide-react';

interface UserDashboardProps {
    user: {
        name: string;
        email: string;
        created_at: string;
    };
    recentOrders: any[];
}

export default function UserDashboard({ user, recentOrders }: UserDashboardProps) {
    return (
        <ShopFrontLayout>
            <Head title="My Dashboard" />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                        <p className="text-gray-600">Manage your account and track your orders</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-gray-500">My Orders</CardTitle>
                                    <Package className="h-4 w-4 text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{recentOrders.length}</div>
                                <Link href={route('orders')} className="text-sm text-blue-600 hover:underline">
                                    View all orders
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-gray-500">Shopping Cart</CardTitle>
                                    <ShoppingCart className="h-4 w-4 text-green-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0</div>
                                <Link href={route('cart')} className="text-sm text-green-600 hover:underline">
                                    View cart
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-gray-500">My Products</CardTitle>
                                    <Package className="h-4 w-4 text-purple-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0</div>
                                <Link href={route('my-products')} className="text-sm text-purple-600 hover:underline">
                                    View products
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-gray-500">Account</CardTitle>
                                    <User className="h-4 w-4 text-orange-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm font-medium">Active</div>
                                <p className="text-xs text-gray-500">Member since {new Date(user.created_at).getFullYear()}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                                <CardDescription>Common tasks you might want to do</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Link href={route('products')}>
                                    <Button variant="outline" className="w-full justify-start">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Browse Products
                                    </Button>
                                </Link>
                                <Link href={route('create-product')}>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Sell a Product
                                    </Button>
                                </Link>
                                <Link href={route('orders')}>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Package className="mr-2 h-4 w-4" />
                                        Track Orders
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                                <CardDescription>Your account details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Name</label>
                                    <p className="text-sm">{user.name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Email</label>
                                    <p className="text-sm">{user.email}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Member Since</label>
                                    <p className="text-sm">{new Date(user.created_at).toLocaleDateString()}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </ShopFrontLayout>
    );
}