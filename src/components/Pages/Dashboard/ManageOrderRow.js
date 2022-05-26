import React from 'react';

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, productName, price, quantity, address, paid, orderStatus, transactionId } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{price}</td>
      <td>
        {quantity}
      </td>
      <td>{address}</td>
      <td className="text-center">
        {paid ?
          <>
            <div>
              <button className="btn btn-success text-white border-0 btn-xs">Paid</button>
              <p>Trsansaction ID: <span className='text-green-500 font-semibold'>{transactionId}</span></p>
            </div>
          </>
          :
          <button className="btn btn-warning text-white border-0 btn-xs">UnPaid</button>
        }
      </td>
      <td>
        {orderStatus ? <button className="btn btn-success text-white border-0 btn-xs">Paid</button> : <button className="btn btn-warning text-white border-0 btn-xs">Pending</button>}
        <br></br>
        <button className='btn btn-xs btn-primary'>Update</button>
      </td>
      <td>{!paid && <button className="btn bg-red-500 text-white border-0 btn-xs">Delete</button>}</td>
    </tr>
  );
};

export default ManageOrderRow;