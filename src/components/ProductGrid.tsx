import React from 'react';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { PackageSearch } from 'lucide-react';

export default function ProductGrid() {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <PackageSearch className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="text-gray-500 mt-1">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}