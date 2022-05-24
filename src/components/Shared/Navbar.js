import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import Loading from './Loading';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  }
  const menuItems = <>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/blogs">My Portfolio</Link></li>
    {
      user ?
        <></>
        :
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </>
    }
    {
      user && <>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </>
    }
  </>

  if (loading) {
    return <Loading></Loading>
  }


  return (
    <header className='bg-primary'>
      <div className="container mx-auto">
        <div className="navbar bg-primary text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link to="/home" className="btn btn-ghost normal-case text-xl">GigitechBD</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <>
                <div className='bg-white text-black p-3 mr-2 rounded-md'><small>Logged: {user?.displayName}</small></div>
                <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
              </>
                :
                <>
                  <button className="btn bg-slate-300 text-black hover:text-white border-0">Hello</button>
                </>
            }

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;