import React from 'react';

const Banner = () => {
  return (
    <div class="hero h-screen bg-[url('https://i.postimg.cc/3RkccpSp/banner-gigitech.jpg')]">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-80">
          <h1 class="mb-5 lg:text-5xl text-4xl font-bold">Gigitech BD - Quality motherboard building company</h1>
          <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;