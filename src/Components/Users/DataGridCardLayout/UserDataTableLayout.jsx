import React from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import moment from 'moment';
import CrudTools from '../../ToolsBar/CrudTools';

function UserDataTableLayout({ Users, setSelectedUser }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full text-center">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Email</th>
            <th className="hidden 2xl:table-cell">Phone</th>
            <th className="hidden 2xl:table-cell">Informations</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr id={user.id} key={user.id}>
              <td>
                <div className="flex items-center justify-start  space-x-3">
                  <div className="avatar ">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.avatar} alt={user.firstName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-left">
                      {user.firstName}
                      {' '}
                      {user.lastName}
                    </div>
                    <div className="text-sm opacity-50 text-left">
                      @
                      {user.username}
                    </div>
                  </div>
                </div>
              </td>
              <td className="capitalize  ">
                <div className="flex justify-center items-center gap-1">
                  {user.email}
                </div>
              </td>
              <td className="capitalize  hidden 2xl:table-cell">
                <div className="flex justify-center items-center gap-1">
                  {user.phone}
                </div>
              </td>
              <td className="capitalize font-semibold  hidden 2xl:table-cell">
                <div className="flex justify-center items-center gap-1">
                  { moment(user.birthday, 'YYYYMMDD').fromNow(true) }
                  {user.sex !== 'male' ? <BsGenderMale /> : <BsGenderFemale />}
                </div>
              </td>
              <td>
                {user.status === 'Active' && <span className="badge badge-success">{user.status}</span>}
                {user.status === 'Banned' && <span className="badge badge-error">{user.status}</span>}
                {user.status === 'Desactivated' && <span className="badge badge-warning">{user.status}</span>}
              </td>
              <td>
                <CrudTools SelectedUser={setSelectedUser} userData={user} />

              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default UserDataTableLayout;
