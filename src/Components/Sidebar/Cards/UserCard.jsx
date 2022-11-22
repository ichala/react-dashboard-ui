import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function UserCard() {
  return (
    <div className="card  2xl:w-[23%] lg:w-[45%] bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="flex justify-center gap-2">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img alt="user" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="card-title text-sm">UserName</h2>
            <h4 className=" text-sm opacity-50">email@email.com</h4>
          </div>
          <div className="badge badge-primary">Active</div>
        </div>
        <div className="card-actions justify-center">
          <div className="btn-group ">
            <button type="button" className="btn btn-sm ">
              <AiFillEye />
            </button>
            <button type="button" className="btn btn-sm">
              <AiOutlineEdit />
            </button>
            <button type="button" className="btn btn-sm">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
