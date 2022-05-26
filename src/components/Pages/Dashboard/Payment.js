import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const { productName, price, quantity, address } = order;
  const url = `http://localhost:5000/order/${id}`;

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
            <p><strong className='font-semibold'>Price:</strong> {price}</p>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Quantity:</strong> {quantity}</p>
          </div>
          <div className='my-3 px-2'>
            <p><strong className='font-semibold'>Shipping Address:</strong> {address}</p>
          </div>
        </div>


        {/* <div class="overflow-x-auto">
          <table class="table w-full">

            <thead>
              <tr>
                <th colSpan={2}>Order Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-md font-semibold'>Product Name</th>
                <td>{productName}</td>
              </tr>
              <tr>
                <th className='text-md font-semibold'>Price</th>
                <td>{price}</td>
              </tr>
              <tr>
                <th className='text-md font-semibold'>Quantity</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th className='text-md font-semibold'>Shipping Address</th>
                <td>{address}</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default Payment;