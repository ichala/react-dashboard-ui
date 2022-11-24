import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import ThemeSelect from './ThemeSelect';

function Navbar() {
  return (
    <div className="sticky top-0 z-30  navbar bg-base-200">
      <div className="flex-1">
        <label htmlFor="SideBar" className=" text-base-content  drawer-button lg:hidden"><BiMenuAltLeft size={30} /></label>
      </div>
      <ThemeSelect />
      <div className="flex-none">

        <div tabIndex={0} className="dropdown dropdown-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="s" src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#s" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a href="#s">Settings</a></li>
            <li><a href="#s">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
