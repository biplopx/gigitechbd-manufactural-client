import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
  const id = useParams();
  // const [order, setOrder] = useState({});
  // console.log(id)
  // const url = `http://localhost:5000/order/${id}`;

  // useEffect(() => {
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => setOrder(data))
  // }, [url])
  // // // const url = `http://localhost:5000/order/${id}`;
  // // // const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
  // // if (isLoading) {
  // //   return <Loading></Loading>
  // // }
  return (
    <div className='flex justify-center rounded-md'>
      <div className='w-full lg:w-6/12 md:w-full p-5 border-2 rounded'>
        <h2 className="text-2xl font-bold text-center text-accent mb-3">Payment Information</h2>
        <hr></hr>
        {/* <h2 className='text-2xl'>{order.name}</h2> */}
      </div>
    </div>
  );
};

export default Payment;