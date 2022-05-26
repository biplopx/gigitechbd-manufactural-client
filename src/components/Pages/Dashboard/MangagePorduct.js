import React from 'react';
import swal from 'sweetalert';

const MangagePorduct = ({ product, index, refetch }) => {
  const { _id, name, price, minQuantity, availableQuantity } = product;
  const handleDelete = event => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          }).then(res => res.json())
            .then(data => {
              swal("Successfully product has beend deleted", {
                icon: "success",
              });
              refetch()
            });

        } else {
          swal("Your product is safe");
        }
      });
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{minQuantity}</td>
      <td>{availableQuantity}</td>
      <td>
        <button onClick={handleDelete} className="btn bg-red-500 text-white border-0 btn-xs">Delete</button>
      </td>

    </tr>
  );
};

export default MangagePorduct;