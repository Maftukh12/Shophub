import React from 'react';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="flex gap-10">
              <div className="w-64 hidden lg:block">
                <div className="sticky top-28">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>
                  <Filters />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
                      <p className="mt-1 text-gray-500">Discover our curated selection of premium items</p>
                    </div>
                  </div>
                  <SearchBar />
                </div>
                <ProductGrid />
              </div>
              <div className="w-96 hidden lg:block">
                <div className="sticky top-28">
                  <Cart />
                </div>
              </div>
            </div>
          </main>
        </div>
      </FilterProvider>
    </CartProvider>
  );
}

export default App;