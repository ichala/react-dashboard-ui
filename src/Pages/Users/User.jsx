import React, { useContext, useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import {
  FaBan, FaDollarSign, FaEdit, FaLink, FaUserCircle, FaUserCog, FaUserFriends, FaUsers,
} from 'react-icons/fa';
import {
  NavLink, Outlet, useNavigate, useParams,
} from 'react-router-dom';
import EditUser from '../../Components/Users/EditUser';
import { DataContext } from '../../config/Context/database';

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Users } = useContext(DataContext);
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const User = await Users.find((u) => u.id === id);
      // Simulate Api Calls
      setTimeout(async () => {
        setUser(User);
        setLoading(false);
        navigate('overview');
      }, 1000);
    };
    getUser();
  }, [Users, id, navigate]);
  if (Loading) {
    return 'loading';
  }
  if (!User) {
    return (
      <div className="flex justify-center p-4">
        <div className="alert self-center p-4 m-2 alert-error italic font-semibold max-w-md shadow-lg">
          <div>
            <BsInfoCircleFill size={20} />
            <span>User Not Found</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto md:p-4">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-4/12">
          <div className="card w-full bg-base-100 text-base-content shadow-xl">
            <div className="card-body">
              <div className="flex justify-center items-center flex-col gap-3">
                <div className="avatar flex justify-center">
                  <div className="w-28 mask rounded-full">
                    <img src={User.avatar} alt={User.firstName} />
                  </div>
                </div>
                <h2 className="card-title">
                  {User.firstName}
                  {User.lastName}
                </h2>
                <div className="flex justify-evenly mt-5  w-full">
                  <div className="flex justify-center items-center gap-2 ">
                    <span className="p-3 bg-primary text-primary-content rounded">
                      <FaUserFriends size={23} />
                    </span>
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">1.28k</span>
                      <span className="text-md opacity-70">Friends</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 ">
                    <span className="p-3 bg-base-300 bg-primary text-primary-content rounded">
                      <FaUsers size={23} />
                    </span>
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">148k</span>
                      <span className="text-md opacity-70">Followers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start mt-6">
                <span className="text-xl font-semibold opacity-80">Details</span>
                <hr className="mt-4" />
                <div className="flex flex-col justify-start gap-2 mt-4  opacity-70 font-semibold">
                  <div className="flex justify-between">
                    <span className="">Status</span>
                    {User.status === 'Active' && <span className="badge badge-success badge-md">{User.status}</span>}
                    {User.status === 'Banned' && <span className="badge badge-error badge-md">{User.status}</span>}
                    {User.status === 'Desactivated' && <span className="badge badge-warning badge-md">{User.status}</span>}
                  </div>
                  <div className="flex justify-between">
                    <span className="">First Name</span>
                    <span className="text-md opacity-70">{User.firstName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Last Name</span>
                    <span className="text-md opacity-70">{User.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Email</span>
                    <span className="text-md opacity-70">{User.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Phone</span>
                    <span className="text-md opacity-70">{User.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Address</span>
                    <span className="text-md opacity-70">{User.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Country</span>
                    <span className="text-md opacity-70">{User.country}</span>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="flex justify-center gap-4 p-4">
                  <label
                    htmlFor="modal-editUser"
                    type="button"
                    className="btn btn-primary btn-sm gap-2"
                  >
                    <FaEdit />
                    Edit
                  </label>

                  <EditUser
                    user={User}
                  />
                  <button type="button" className="btn btn-error btn-sm gap-2">
                    <FaBan />
                    Ban
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full mt-5 bg-base-100 text-base-content shadow-xl">
            <div className="card-body p-3">
              <div className="card-title opacity-70 m-3 italic">User Socials</div>
              <span className="opacity-70 text-sm font-semibold">Friends</span>
              <hr />
              <div className="flex flex-wrap justify-center">
                <div className="avatar-group 2xl:-space-x-6 -space-x-8">
                  {Users.slice(1, 10).map((user) => (
                    <div key={user.id}>
                      <div className="avatar border-base-300">
                        <div className="w-12 border-base-300">
                          <img alt={user.name} src={user.avatar} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                      <span className="text-sm">+1.2k</span>
                    </div>
                  </div>
                </div>
              </div>

              <span className="opacity-70 text-sm font-semibold">Followers</span>
              <hr />
              <div className="flex flex-wrap justify-center">
                <div className="avatar-group 2xl:-space-x-6 -space-x-8">
                  {Users.slice(11, 20).map((user) => (
                    <div key={user.id}>
                      <div className="avatar border-base-300">
                        <div className="w-12 border-base-300">
                          <img alt={user.name} src={user.avatar} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                      <span className="text-sm">+148k</span>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className=" btn btn-xs btn-primary self-center mt-5">View All</button>
            </div>
          </div>
        </div>
        <div className="px-4 mt-5 xl:mt-0 w-full xl:w-3/4 ">
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
          <div className="md:p-4 text-base-content mt-5 md:mt-0">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default User;
