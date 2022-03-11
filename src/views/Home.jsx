import React from 'react';
import ProductsList from '../components/ProductsList';
import { useProducts } from '../services/Products';

function Home() {
  const products = useProducts();

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Home;
