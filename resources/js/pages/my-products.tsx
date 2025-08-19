import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import AppLayout from '@/layouts/app-layout';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  in_stock: boolean;
  category: {
    name: string;
  };
}

export default function MyProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, we'll fetch all products and filter by current user on backend later
    fetch('/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data || []);
        setLoading(false);
      });
  }, []);

  const deleteProduct = async (productId: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      await fetch(`/api/v1/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        },
      });
      setProducts(products.filter(p => p.id !== productId));
    } catch (error) {
      alert('Error deleting product');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AppLayout>
      <Head title="My Products" />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Products</h1>
                <a
                  href="/create-product"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add New Product
                </a>
              </div>
              
              {products.length === 0 ? (
                <p className="text-gray-500">You haven't created any products yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                      {product.image && (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded mb-4"
                        />
                      )}
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-700 mb-2">{product.description}</p>
                      <p className="text-sm text-gray-500 mb-2">Category: {product.category.name}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold">${product.price}</span>
                        <span className={`px-2 py-1 rounded text-sm ${
                          product.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.in_stock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="flex-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}