import React from 'react';
import {
  FaDollarSign, FaLink, FaUserCircle, FaUserCog,
} from 'react-icons/fa';
import {
  NavLink,
} from 'react-router-dom';

const UserNavTabs = () => (
  <div className="tabs w-full">
    <NavLink
      to="overview"
      href="#2"
      className={({ isActive }) => `${isActive && 'tab-active'} tab tab-bordered w-full  xl:w-1/5 gap-2 `}
    >
      <FaUserCircle />
      Overview
    </NavLink>
    <NavLink
      to="billing"
      href="#2"
      className={({ isActive }) => `${isActive && 'tab-active'} tab tab-bordered  w-full xl:w-1/5 gap-2 `}
    >
      <FaDollarSign />
      Billing
    </NavLink>
    <NavLink
      to="accounts"
      className={({ isActive }) => `${isActive && 'tab-active'} tab tab-bordered  xl:w-1/5 w-full gap-2 `}
    >
      <FaLink />
      Accounts
    </NavLink>
    <NavLink
      to="preferences"
      className={({ isActive }) => `${isActive && 'tab-active'} tab tab-bordered  xl:w-1/5 w-full gap-2 `}
    >
      {' '}
      <FaUserCog />
      Preferences
    </NavLink>

  </div>

);

export default UserNavTabs;
