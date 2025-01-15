import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { Plus, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Tag */}
          <div className="absolute top-4 left-4">
            <div className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-lg flex items-center gap-1">
              <span className="text-xs text-gray-500">$</span>
              <span className="text-indigo-600">{product.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="glass-effect p-2 rounded-full text-gray-700 hover:text-indigo-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className={`absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-white/10 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            >
              <Plus className="h-5 w-5 transform group-hover/btn:rotate-180 transition-transform duration-300" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-5">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-800 border border-indigo-100/50">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}