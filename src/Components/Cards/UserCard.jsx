import React from 'react';
import CrudTools from '../ToolsBar/CrudTools';

function UserCard({ user, setSelectedUser }) {
  return (
    <div id={user.id} className="card w-full 2xl:w-[23%] lg:w-[45%] bg-base-200 shadow-xl overflow-hidden">
      <div className="card-body">

        <div className="flex justify-center gap-2">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src={user.avatar} alt={user.firstName} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="card-title text-sm">
              {user.fullName}
              {' '}
              {user.lastName}
            </h2>
            <h4 className=" text-sm opacity-50 text-ellipsis">{user.email}</h4>
          </div>

        </div>
        <div className="flex justify-center gap-2">
          {user.status === 'Active' && <span className="badge badge-success">{user.status}</span>}
          {user.status === 'Banned' && <span className="badge badge-error">{user.status}</span>}
          {user.status === 'Desactivated' && <span className="badge badge-warning">{user.status}</span>}
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
