import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="glass-effect rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
          <ShoppingBag className="h-8 w-8 text-indigo-600" />
        </div>
        <p className="text-gray-900 font-medium">Your cart is empty</p>
        <p className="text-sm text-gray-500 mt-1">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-6">
        Shopping Cart
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="gradient-border animate-fade-in"
          >
            <div className="flex items-center gap-4 p-4 bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                <p className="text-indigo-600 font-medium">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between text-gray-900">
          <span className="font-medium">Subtotal</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gradient-to-r from-indigo-100 to-purple-100" />
        <div className="flex items-center justify-between text-gray-900">
          <span className="font-medium">Total</span>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            ${total.toFixed(2)}
          </span>
        </div>
        <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-600/20 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}