import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function UserDataTableLayout({ Users }) {
  console.log(Users);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full text-center">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Informations</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center justify-start space-x-3">
                  <div className="avatar">
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
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>
                {Date(user.birthday) }
                {' '}
                {user.sex }
              </td>
              <td>
                {user.status === 'Active' && <span className="badge badge-success">{user.status}</span>}
                {user.status === 'Banned' && <span className="badge badge-error">{user.status}</span>}
                {user.status === 'Desactivated' && <span className="badge badge-warning">{user.status}</span>}
              </td>
              <td>
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

              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default UserDataTableLayout;
