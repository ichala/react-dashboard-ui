import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';

function CrudTools({ userData, SelectedUser }) {
  const handleDelete = () => { toast.success(`@${userData.username} Successfully Deleted!`); document.getElementById(userData.id).style.display = 'none'; };
  return (
    <div className="btn-group ">
      <button type="button" className="btn btn-sm ">
        <AiFillEye />
      </button>
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
