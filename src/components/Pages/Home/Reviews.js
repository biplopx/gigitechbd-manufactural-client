import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews')
    .then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <section className='py-10 px-5'>
      <h2 className='text-center text-3xl text-accent font-bold mb-8'>Customer Reviews</h2>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {
            reviews.map(review => <Review key={review._id} review={review}></Review>)
          }
        </div>
      </div>
    </section>
  );
};

export default Reviews;