import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
  const { data: products, isLoading } = useQuery('products', () => fetch('https://gigitec-bd.onrender.com/products')
    .then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <section className='p-10 px-5'>
      <h2 className='text-center text-3xl text-accent font-bold mb-8'>All Products</h2>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-7'>
          {
            products.map(product => <Product key={product._id} product={product}></Product>)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;