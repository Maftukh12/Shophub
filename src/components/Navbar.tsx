import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="glass-effect fixed w-full z-10 shadow-lg shadow-black/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
              <Store className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                ShopHub
              </span>
              <p className="text-xs text-gray-500 -mt-1">Premium Shopping Experience</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative group">
              <div className="p-3 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-slide-down shadow-lg">
                    {itemCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}