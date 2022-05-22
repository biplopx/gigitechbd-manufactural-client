import React from 'react';
import Banner from './Banner';
import ProductShowcase from './ProductShowcase';
import Reviews from './Reviews';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ProductShowcase></ProductShowcase>
      <Reviews></Reviews>
    </>
  );
};

export default Home;