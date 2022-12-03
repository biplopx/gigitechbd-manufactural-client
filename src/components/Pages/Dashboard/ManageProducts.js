import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MangagePorduct from './MangagePorduct';

const ManageProducts = () => {
  const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://gigitec-bd.onrender.com/products').then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-md font-bold text-accent mb-3">Manage All Products {products.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Min Quantity</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => <MangagePorduct key={product._id} index={index}
                product={product} refetch={refetch}></MangagePorduct>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;