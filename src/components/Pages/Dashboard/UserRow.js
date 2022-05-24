import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('Failed to make an admin');
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Successfully made an admin')
        }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role === 'admin' ? <small>Already Admin</small> : <button onClick={makeAdmin} className="btn btn-xs text-white">Make Admin</button>}
      </td>
      {/* <td><button onClick={makeAdmin} className="btn bg-red-400 border-0 text-white btn-xs">Delete</button></td> */}
    </tr>
  );
};

export default UserRow;