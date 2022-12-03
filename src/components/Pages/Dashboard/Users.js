import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://gigitechbd.herokuapp.com/users', {
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
      <h2 className="text-md font-semibold text-accent mb-3">All Users ({users.length})</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;