import React from 'react';
import { FaHome, FaChartPie, FaUserFriends } from 'react-icons/fa';
import { BiMenuAltLeft } from 'react-icons/bi';

function Sidebar({ children }) {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="SideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-base-100">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <label htmlFor="SideBar" className="text-base-content  drawer-button lg:hidden"><BiMenuAltLeft size={30} /></label>
            </div>
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
          <div className="container-lg px-4 h-100">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="SideBar" className="drawer-overlay" />
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            <li>
              <a href="#s">
                <FaHome className="h-6 w-6" />
                Home
              </a>
            </li>
            <li>
              <a href="#s">
                <FaChartPie className="h-6 w-6" />
                Statistiques
              </a>
            </li>
            <li>
              <a href="#s">
                <FaUserFriends className="h-6 w-6" />
                Users
              </a>
            </li>

          </ul>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
