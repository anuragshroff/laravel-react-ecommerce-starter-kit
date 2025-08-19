import ProductListing from '@/components/frontend/ProductListing';
import ShopBanner from '@/components/frontend/ShopBanner';
import ShopCategories from '@/components/frontend/ShopCategories';
import ShopFrontLayout from '@/layouts/shop-front-layout';
import { CategoryItem } from '@/types/categories';
import { ProductItem } from '@/types/products';
import { Link } from '@inertiajs/react';
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';

interface HomeProps {
    categories: CategoryItem[];
    featuredProducts: ProductItem[];
    newArrivals: ProductItem[];
    bestSellers: ProductItem[];
}

export default function home({ categories, featuredProducts, newArrivals, bestSellers }: HomeProps) {
    return (
        <ShopFrontLayout>
            <div className="min-h-screen">
                {/* Hero Banner */}
                <div className="container mx-auto max-w-7xl px-4">
                    <ShopBanner />
                </div>

                {/* Features Section */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="flex items-center space-x-3 p-4">
                                <Truck className="h-8 w-8 text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                                    <p className="text-sm text-gray-600">On orders over $100</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-4">
                                <Shield className="h-8 w-8 text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                                    <p className="text-sm text-gray-600">100% secure checkout</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-4">
                                <RotateCcw className="h-8 w-8 text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                                    <p className="text-sm text-gray-600">30-day return policy</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-4">
                                <Headphones className="h-8 w-8 text-orange-500" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                                    <p className="text-sm text-gray-600">Customer service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Discover our wide range of products across different categories</p>
                        </div>
                        <ShopCategories categories={categories} />
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto max-w-7xl px-4">
                        <ProductListing products={featuredProducts} />
                    </div>
                </section>

                {/* New Arrivals */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
                                <p className="text-gray-600">Check out our latest products</p>
                            </div>
                            <Link href={route('products')} className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                                View All <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {newArrivals.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-square overflow-hidden">
                                        <img 
                                            src={product.images?.[0] ? `/storage/${product.images[0]}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjAwIDEwMEMxNjEuMzQzIDEwMCAxMzAgMTMxLjM0MyAxMzAgMTcwQzEzMCAyMDguNjU3IDE2MS4zNDMgMjQwIDIwMCAyNDBDMjM4LjY1NyAyNDAgMjcwIDIwOC42NTcgMjcwIDE3MEMyNzAgMTMxLjM0MyAyMzguNjU3IDEwMCAyMDAgMTAwWiIgZmlsbD0iIzlCOUJBMyIvPjxwYXRoIGQ9Ik0xNTAgMjgwSDI1MEMyNjYuNTY5IDI4MCAyODAgMjkzLjQzMSAyODAgMzEwVjMzMEgyODBIMTIwVjMxMEMxMjAgMjkzLjQzMSAxMzMuNDMxIDI4MCAxNTAgMjgwWiIgZmlsbD0iIzlCOUJBMyIvPjwvc3ZnPg=='} 
                                            alt={product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{product.category.name}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                            <div className="flex items-center">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                <span className="text-sm text-gray-600 ml-1">4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promotional Banner */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 md:p-12 text-white text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer</h2>
                            <p className="text-xl mb-6 opacity-90">Get 25% off on all products this weekend only!</p>
                            <Link href={route('products')} className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Best Sellers */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Sellers</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Our most popular products loved by customers</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {bestSellers.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-square overflow-hidden relative">
                                        <img 
                                            src={product.images?.[0] ? `/storage/${product.images[0]}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjAwIDEwMEMxNjEuMzQzIDEwMCAxMzAgMTMxLjM0MyAxMzAgMTcwQzEzMCAyMDguNjU3IDE2MS4zNDMgMjQwIDIwMCAyNDBDMjM4LjY1NyAyNDAgMjcwIDIwOC42NTcgMjcwIDE3MEMyNzAgMTMxLjM0MyAyMzguNjU3IDEwMCAyMDAgMTAwWiIgZmlsbD0iIzlCOUJBMyIvPjxwYXRoIGQ9Ik0xNTAgMjgwSDI1MEMyNjYuNTY5IDI4MCAyODAgMjkzLjQzMSAyODAgMzEwVjMzMEgyODBIMTIwVjMxMEMxMjAgMjkzLjQzMSAxMzMuNDMxIDI4MCAxNTAgMjgwWiIgZmlsbD0iIzlCOUJBMyIvPjwvc3ZnPg=='} 
                                            alt={product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                            Best Seller
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{product.category.name}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                            <div className="flex items-center">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                <span className="text-sm text-gray-600 ml-1">4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-16 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest updates on new products and exclusive offers</p>
                        <div className="max-w-md mx-auto flex gap-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </ShopFrontLayout>
    );
}
