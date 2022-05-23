import React from 'react';

const Reviews = () => {
  return (
    <section className='py-10 px-5'>
      <h2 className='text-center text-3xl text-accent font-bold mb-8'>We Proudly Served</h2>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
          <div className="card  bg-base-100 rounded-md border-2">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt='avater' />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Johon Doe</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p><strong>Rating:</strong> 5</p>
            </div>
          </div>
          <div className="card  bg-base-100 rounded-md border-2">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt='avater' />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Johon Doe</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p><strong>Rating:</strong> 5</p>
            </div>
          </div>
          <div className="card bg-base-100 rounded-md border-2">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt='avater' />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Johon Doe</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p><strong>Rating:</strong> 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;