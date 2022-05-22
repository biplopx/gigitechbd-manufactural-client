import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/register">Register</Link></li>
  </>
  return (
    <header className='bg-primary'>
      <div className="container mx-auto">
        <div class="navbar bg-primary text-white">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link to="/home" class="btn btn-ghost normal-case text-xl">GigitechBD</Link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
          <div class="navbar-end">
            <button class="btn">Get started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;