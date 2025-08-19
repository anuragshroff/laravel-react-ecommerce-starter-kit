import { Head } from '@inertiajs/react';
import ShopFrontLayout from '@/layouts/shop-front-layout';
import { ProductItem } from '@/types/products';

interface ProductsProps {
  products: ProductItem[];
}

export default function Products({ products }: ProductsProps) {

  const addToCart = (productId: number) => {
    alert('Product added to cart!');
  };

  return (
    <ShopFrontLayout>
      <Head title="Products" />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">All Products</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                    <img 
                      src={product.images?.[0] ? `/storage/${product.images[0]}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjAwIDEwMEMxNjEuMzQzIDEwMCAxMzAgMTMxLjM0MyAxMzAgMTcwQzEzMCAyMDguNjU3IDE2MS4zNDMgMjQwIDIwMCAyNDBDMjM4LjY1NyAyNDAgMjcwIDIwOC42NTcgMjcwIDE3MEMyNzAgMTMxLjM0MyAyMzguNjU3IDEwMCAyMDAgMTAwWiIgZmlsbD0iIzlCOUJBMyIvPjxwYXRoIGQ9Ik0xNTAgMjgwSDI1MEMyNjYuNTY5IDI4MCAyODAgMjkzLjQzMSAyODAgMzEwVjMzMEgyODBIMTIwVjMxMEMxMjAgMjkzLjQzMSAxMzMuNDMxIDI4MCAxNTAgMjgwWiIgZmlsbD0iIzlCOUJBMyIvPjwvc3ZnPg=='} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {product.artisan?.name || 'Unknown'}</p>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="text-sm text-gray-500 mb-3">Category: {product.category.name}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${product.price}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopFrontLayout>
  );
}