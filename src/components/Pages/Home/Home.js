import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import ProductShowcase from './ProductShowcase';
import Reviews from './Reviews';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <ProductShowcase></ProductShowcase>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;