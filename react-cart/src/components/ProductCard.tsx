import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-full h-[450px] flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-contain p-4"
      />
    <div className="flex-1 p-4 flex flex-col justify-start">
  <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
    {product.title}
  </h2>

  <div className="flex items-center justify-between">
    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
      ${product.price.toFixed(2)}
    </p>

    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
</div>
    </div>
  );
};

export default ProductCard;
