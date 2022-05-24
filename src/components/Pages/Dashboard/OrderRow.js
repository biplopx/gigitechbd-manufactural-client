import React from 'react';

const OrderRow = ({ order, index }) => {
  const { productName, price, quantity } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        {price}
      </td>
      <td>
        <div className="badge badge-success text-white">not paid</div>
      </td>
      <td><button className="btn bg-red-500 text-white border-0 btn-sm">Cancel</button></td>
    </tr>
  );
};

export default OrderRow;