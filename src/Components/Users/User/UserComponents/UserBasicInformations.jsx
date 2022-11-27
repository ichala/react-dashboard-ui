import React from 'react';
import {
  FaBan, FaEdit, FaUserFriends, FaUsers,
} from 'react-icons/fa';

const UserBasicInformations = ({ User }) => (
  <div className="card w-full bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="card-body">
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="avatar flex justify-center">
          <div className="w-28 mask rounded-full">
            <img src={User.avatar} alt={User.firstName} />
          </div>
        </div>
        <h2 className="card-title">
          {`${User.firstName} `}
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
          <button
            type="button"
            className="btn btn-primary btn-sm gap-2"
          >
            <FaEdit />
            Edit
          </button>
          <button type="button" className="btn btn-error btn-sm gap-2">
            <FaBan />
            Ban
          </button>
        </div>
      </div>
    </div>
  </div>

);

export default UserBasicInformations;
