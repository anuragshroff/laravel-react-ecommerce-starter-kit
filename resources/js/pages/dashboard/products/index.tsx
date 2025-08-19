import ShopFrontLayout from '@/layouts/shop-front-layout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Package, Edit, Trash2 } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url?: string;
    created_at: string;
}

interface MyProductsProps {
    products: Product[];
}

export default function MyProducts({ products }: MyProductsProps) {
    return (
        <ShopFrontLayout>
            <Head title="My Products" />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Products</h1>
                            <p className="text-gray-600">Manage your product listings</p>
                        </div>
                        <Link href={route('create-product')}>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Product
                            </Button>
                        </Link>
                    </div>

                    {products.length === 0 ? (
                        <Card>
                            <CardContent className="text-center py-12">
                                <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
                                <p className="text-gray-500 mb-4">Start selling by adding your first product</p>
                                <Link href={route('create-product')}>
                                    <Button>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Your First Product
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Card key={product.id}>
                                    <CardHeader className="pb-3">
                                        {product.image_url && (
                                            <img 
                                                src={product.image_url} 
                                                alt={product.name}
                                                className="w-full h-48 object-cover rounded-md mb-3"
                                            />
                                        )}
                                        <CardTitle className="text-lg">{product.name}</CardTitle>
                                        <p className="text-2xl font-bold text-green-600">${product.price}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <Edit className="mr-1 h-3 w-3" />
                                                Edit
                                            </Button>
                                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                                <Trash2 className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ShopFrontLayout>
    );
}