import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function UserDataTableLayout() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full text-center">
        <thead>
          <tr className="text-center">
            <th>Informations</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://placeimg.com/80/80/people" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UserName</div>
                  <div className="text-sm opacity-50">email@email.com</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-primary">Active</span>
            </td>
            <td>
              {' '}
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
          <tr>
            <td>
              <div className="flex items-center justify-center  space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://placeimg.com/80/80/people" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UserName</div>
                  <div className="text-sm opacity-50">email@email.com</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-primary">Active</span>
            </td>
            <td>
              {' '}
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

          <tr>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://placeimg.com/80/80/people" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UserName</div>
                  <div className="text-sm opacity-50">email@email.com</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-primary">Active</span>
            </td>
            <td>
              {' '}
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
          <tr>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://placeimg.com/80/80/people" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">UserName</div>
                  <div className="text-sm opacity-50">email@email.com</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-primary">Active</span>
            </td>
            <td>
              {' '}
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

        </tbody>

      </table>
    </div>
  );
}

export default UserDataTableLayout;
