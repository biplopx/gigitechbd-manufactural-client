import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase';
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const url = `http://localhost:5000/myorders/${user.email}`;

  const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading || loading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div>
        <h2 className="text-md font-bold text-accent mb-3">My Order</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orders?.map((order, index) => <OrderRow key={order._id} order={order} index={index}></OrderRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;