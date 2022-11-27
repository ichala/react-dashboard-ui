import React from 'react';
import CrudTools from '../Users/ToolsBar/CrudTools';

function UserCard({ user, setSelectedUser }) {
  return (
    <div id={user.id} className="card w-full 2xl:w-[23%] lg:w-[45%] md:w-[45%] sm:w-[45%] bg-base-200 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] overflow-hidden">
      <div className="card-body">

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="avatar">
            <div className="w-20 mask rounded-full">
              <img src={user.avatar} alt={user.firstName} />
            </div>
          </div>
          <div className="flex justify-center gap-2">
            {user.status === 'Active' && <span className="badge badge-success badge-sm">{user.status}</span>}
            {user.status === 'Banned' && <span className="badge badge-error badge-sm">{user.status}</span>}
            {user.status === 'Desactivated' && <span className="badge badge-warning badge-sm">{user.status}</span>}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="card-title text-sm">
              {user.firstName}
              {' '}
              {user.lastName}
            </h2>
            <h4 className=" text-sm opacity-50 text-ellipsis">{user.email}</h4>
          </div>

        </div>
        <div className="card-actions justify-center">
          <CrudTools
            SelectedUser={setSelectedUser}
            userData={user}
          />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
