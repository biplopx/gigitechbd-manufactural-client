import React from 'react';

const ProductShowcase = () => {
  return (
    <div className='p-10'>
      <h2 className='text-center text-accent text-3xl font-bold mb-10'>Product Showcase</h2>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
          <div className="card  bg-base-100 border-2 shadow-none">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3">Shoes!</h2>
              <hr className='mb-3' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur laudantium eos animi aut aliquid voluptatem velit minima, tempore deleniti laboriosam nam dignissimos harum et beatae voluptatum, eveniet obcaecati id.</p>
              <p><strong>Minimum Order Quantity:</strong> 100</p>
              <p><strong>Available Quantity:</strong> 100</p>
              <p><strong>Price:</strong> $99 (per unit)</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 border-2 shadow-none">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3">Shoes!</h2>
              <hr className='mb-3' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur laudantium eos animi aut aliquid voluptatem velit minima, tempore deleniti laboriosam nam dignissimos harum et beatae voluptatum, eveniet obcaecati id.</p>
              <p><strong>Minimum Order Quantity:</strong> 100</p>
              <p><strong>Available Quantity:</strong> 100</p>
              <p><strong>Price:</strong> $99 (per unit)</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 border-2 shadow-none">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3">Shoes!</h2>
              <hr className='mb-3' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur laudantium eos animi aut aliquid voluptatem velit minima, tempore deleniti laboriosam nam dignissimos harum et beatae voluptatum, eveniet obcaecati id.</p>
              <p><strong>Minimum Order Quantity:</strong> 100</p>
              <p><strong>Available Quantity:</strong> 100</p>
              <p><strong>Price:</strong> $99 (per unit)</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;