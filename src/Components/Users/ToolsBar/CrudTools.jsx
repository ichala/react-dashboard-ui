import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function CrudTools({ userData, SelectedUser }) {
  const handleDelete = () => { toast.success(`@${userData.username} Successfully Deleted!`); document.getElementById(userData.id).style.display = 'none'; };
  return (
    <div className="btn-group ">
      <Link className="btn btn-sm " to={userData.id}>
        <AiFillEye />
      </Link>
      <label
        htmlFor="modal-editUser"
        onClick={() => SelectedUser(userData)}
        className="btn btn-sm"
      >
        <AiOutlineEdit />
      </label>
      <button onClick={() => handleDelete(userData.id)} type="button" className="btn btn-sm">
        <AiFillDelete />
      </button>
    </div>
  );
}

export default CrudTools;
