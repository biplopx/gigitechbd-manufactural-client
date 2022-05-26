import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index }) => {
  const { _id, productName, price, quantity, paid } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        {price}
      </td>
      <td>
        <button className="btn btn-warning text-white border-0 btn-xs"><Link to={`/dashboard/payment/${_id}`}>Pay Now</Link></button>
        {paid && <button className="btn btn-success text-white border-0 btn-xs">Paid</button>}
      </td>
      <td><button className="btn bg-red-500 text-white border-0 btn-xs">Cancel</button></td>
    </tr>
  );
};

export default OrderRow;