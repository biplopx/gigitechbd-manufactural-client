import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, productName, price, quantity, address, paid, orderStatus, transactionId, email } = order;

  // update shippment
  const updateShippment = () => {
    const orderStatus = {
      orderStatus: true
    }
    fetch(`http://localhost:5000/order/status/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderStatus)
    }).then(res => res.json())
      .then(data => {
        toast.success('Successfully order status change to shipped');
        refetch();
      })
  }
  // Handle Unpaid Order Delete
  const handleDelete = event => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to Delete this order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`http://localhost:5000/order/${_id}`, {
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
      <td>{price}</td>
      <td>
        {quantity}
      </td>
      <td>
        {email}
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
        {orderStatus ? <button className="btn btn-success text-white border-0 btn-xs">Shipped</button> : <button className="btn btn-warning text-white border-0 btn-xs">Pending</button>}
        <br></br>
        {!orderStatus && <button onClick={updateShippment} className='btn btn-xs btn-primary'>Update</button>}
      </td>
      <td>{!paid && <button onClick={handleDelete} className="btn bg-red-500 text-white border-0 btn-xs">Delete</button>}</td>
    </tr>
  );
};

export default ManageOrderRow;