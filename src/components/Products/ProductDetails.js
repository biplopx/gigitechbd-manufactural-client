import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const ProductDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/product/${id}`
  const { data: product, isLoading } = useQuery('product', () => fetch(url)
    .then(res => res.json()));
  // const { _id, name, img, description, minQuantity, availableQuantity, price } = data.product;
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <>
      <PageTitle title="Product Details"></PageTitle>
      <section className='flex py-12 p-5'>

      </section>
    </>
  );
};

export default ProductDetails;