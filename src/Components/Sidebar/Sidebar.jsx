import React from 'react';
import { FaHome, FaChartPie, FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Sidebar({ children }) {
  return (
    <>
      <div className="drawer  drawer-mobile ">
        <input id="SideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-base-200">
          <Navbar />
          <div className="container-lg px-4 h-100">
            {children}
          </div>
        </div>
        <div className="drawer-side ">
          <label htmlFor="SideBar" className="drawer-overlay " />
          <ul className="menu font-semibold text-base-content p-4 w-80 bg-base-200 text-base-content ">
            <li>
              <NavLink to="/">
                {' '}
                <FaHome className="h-6 w-6" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="Users">
                <FaUserFriends className="h-6 w-6" />
                Users
              </NavLink>
            </li>
            <li>
              <a href="#s">
                <FaChartPie className="h-6 w-6" />
                Statistiques
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
