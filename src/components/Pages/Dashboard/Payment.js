import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L24ZcEGfsX7ZLIktiGwi4xsiJF20m5bkDvvIR98nlrQ7jE4htQpzuroBH881IShXxdDaBYUYvJnUBfANuKcWfbq00T3qXRsHs');
const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const { productName, price, quantity, address } = order;
  const url = `https://gigitec-bd.onrender.com/order/${id}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [url])

  return (
    <div className='flex justify-center rounded-md'>
      <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
        <h2 className="text-2xl font-bold text-center text-accent mb-3">Payment Information</h2>
        <hr className='my-4' />
        <div>
          <div className='p-3 bg-slate-100 my-3 rounded-md'>
            <h3>Order Summary</h3>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Product Name:</strong> {productName}</p>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Price:</strong> {price} BDT</p>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Quantity:</strong> {quantity}</p>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Shipping Address:</strong> {address}</p>
          </div>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>

      </div>
    </div>
  );
};

export default Payment;