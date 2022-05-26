import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading';
import PageTitle from '../../Shared/PageTitle';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading></Loading>
  }
  return (
    <>
      <PageTitle title="Dashboard"></PageTitle>
      <section>
        <div className="drawer drawer-mobile">
          <input id="side-menu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-5">
            {/* Page content here */}
            <label htmlFor="side-menu" className="btn btn-primary drawer-button text-white mb-3 lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>Dashboard</label>
            <h2 className='text-lg text-accent font-semibold mb-4'>Welcome to dashboard</h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label htmlFor="side-menu" className="drawer-overlay"></label>
            <ul className="menu p-4 bg-[#0097e6] overflow-y-auto w-80 text-white">
              {/* Sidebar content here */}
              <li><Link to="/dashboard">My Profile</Link></li>
              {!admin && <>
                <li><Link to="/dashboard/my-orders">My Order</Link></li>
                <li><Link to="/dashboard/add-review">Add Review</Link></li>
              </>}
              {admin && <>
                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                <li><Link to="/dashboard/manage-orders">Manage All Orders</Link></li>
                <li><Link to="/dashboard/manage-products">Manage All Products</Link></li>
                <li><Link to="/dashboard/all-users">All Users</Link></li>
              </>}
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;