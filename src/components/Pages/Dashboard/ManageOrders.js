import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
  const url = `http://localhost:5000/orders/`;
  const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));




  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-md font-bold text-accent mb-3">All Orders {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Shipping Address</th>
              <th>Payment</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, index) => <ManageOrderRow key={order._id} order={order} index={index} refetch={refetch}></ManageOrderRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;