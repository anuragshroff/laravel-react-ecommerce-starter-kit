import ShopFrontLayout from '@/layouts/shop-front-layout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Tag, Edit, Trash2 } from 'lucide-react';

interface Category {
    id: number;
    name: string;
    description: string;
    created_at: string;
}

interface CategoriesProps {
    categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
    return (
        <ShopFrontLayout>
            <Head title="Categories" />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                            <p className="text-gray-600">Browse product categories</p>
                        </div>
                    </div>

                    {categories.length === 0 ? (
                        <Card>
                            <CardContent className="text-center py-12">
                                <Tag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No categories yet</h3>
                                <p className="text-gray-500">Categories will appear here once they are created</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.map((category) => (
                                <Card key={category.id}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Tag className="h-5 w-5" />
                                            {category.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                                        <p className="text-xs text-gray-500">
                                            Created {new Date(category.created_at).toLocaleDateString()}
                                        </p>
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