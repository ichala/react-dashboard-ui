import React from 'react';
import { AiFillEye, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';

function CrudTools({ userData }) {
  const { id, username } = userData;
  const handleDelete = () => { toast.success(`@${username} Successfully Deleted!`); console.log(document.getElementById(id)); document.getElementById(id).style.display = 'none'; };
  const handleEdit = () => { toast.success('Successfully toasted!'); };
  return (
    <div className="btn-group ">
      <button type="button" className="btn btn-sm ">
        <AiFillEye />
      </button>
      <button onClick={() => handleEdit(id)} type="button" className="btn btn-sm">
        <AiOutlineEdit />
      </button>
      <button onClick={() => handleDelete(id)} type="button" className="btn btn-sm">
        <AiFillDelete />
      </button>
    </div>
  );
}

export default CrudTools;
