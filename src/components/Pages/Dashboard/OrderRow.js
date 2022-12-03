import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const OrderRow = ({ order, index, refetch }) => {
  const { _id, productName, price, quantity, paid, transactionId, orderStatus } = order;
  const handleCancel = event => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to cancel this order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://gigitechbd.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          }).then(res => res.json())
            .then(data => {
              swal("Successfully Order Canceled", {
                icon: "success",
              });
              refetch()
            });

        } else {
          swal("Your order is safe");
        }
      });
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        {price}
      </td>
      <td className='text-center'>
        {paid ?
          <>
            <div>
              <button className="btn btn-success text-white border-0 btn-xs">Paid</button>
              <p>Trsansaction ID: <span className='text-green-500 font-semibold'>{transactionId}</span></p>
            </div>
          </>
          :
          <button className="btn btn-warning text-white border-0 btn-xs"><Link to={`/dashboard/payment/${_id}`}>Pay Now</Link></button>
        }
      </td>
      <td>
        {orderStatus ? <button className="btn btn-success text-white border-0 btn-xs">Shipped</button> : <button className="btn btn-warning text-white border-0 btn-xs">Pending</button>}
      </td>
      <td>{!paid && <button onClick={handleCancel} className="btn bg-red-500 text-white border-0 btn-xs">Cancel</button>}</td>
    </tr>
  );
};

export default OrderRow;