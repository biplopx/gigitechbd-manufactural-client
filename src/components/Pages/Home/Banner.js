import React from 'react';

const Banner = () => {
  return (
    <section className="hero h-screen bg-[url('https://i.postimg.cc/3RkccpSp/banner-gigitech.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-80">
          <h1 className="mb-5 lg:text-5xl text-4xl font-bold">Gigitech BD - Quality motherboard building company</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button id='/#contact' className="btn btn-primary text-white">Contact US</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;