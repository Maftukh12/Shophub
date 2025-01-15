import React from 'react';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';

export default function Filters() {
  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
  } = useFilter();

  const categories = ['all', ...new Set(products.map((p) => p.category))];
  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="glass-effect rounded-2xl shadow-lg p-6 space-y-8">
      <div>
        <h3 className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text uppercase tracking-wider mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block px-4 py-2 text-sm rounded-lg w-full text-left transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text uppercase tracking-wider mb-4">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-lg border-gray-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}