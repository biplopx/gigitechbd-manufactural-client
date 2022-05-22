import React from 'react';
import Banner from './Banner';
import ProductShowcase from './ProductShowcase';
import Reviews from './Reviews';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Banner></Banner>
      <ProductShowcase></ProductShowcase>
      <Reviews></Reviews>
    </>
  );
};

export default Home;