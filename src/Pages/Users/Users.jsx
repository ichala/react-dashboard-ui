import React, { useState } from 'react';
import {
  FiUserMinus, FiUserPlus, FiUsers, FiUserX,
} from 'react-icons/fi';

import {
  BsFillGrid3X3GapFill, BsTable,
} from 'react-icons/bs';
import SmallStatsCard from '../../Components/Sidebar/Cards/SmallStatsCard';
import DataGridCardLayout from '../../Components/Users/DataGridCardLayout/UserDataGridCardLayout';
import UserDataTableLayout from '../../Components/Users/DataGridCardLayout/UserDataTableLayout';

function Users() {
  const [DataLayout, setDataLayout] = useState('Table');
  return (
    <div className="flex flex-col justify-center items-center text-base-content">
      <div className="flex  justify-center w-full items-center lg:flex-row flex-col gap-1 p-4 flex-wrap">
        <SmallStatsCard icon={<FiUsers size={25} />} stats="2500" title="Total" change="+15" />
        <SmallStatsCard icon={<FiUserPlus size={25} />} stats="203" title="New" change="-10" />
        <SmallStatsCard icon={<FiUserMinus size={25} />} stats="9" title="Deleted" change="-22" />
        <SmallStatsCard icon={<FiUserX size={25} />} stats="107" title="Banned" change="-34" />
      </div>
      <div className="card w-full bg-base-100 shadow-md">
        <div className="card-body">
          <div className="card-actions justify-between items-center px-5">
            <button type="button" className="btn btn-primary btn-sm">Add New User</button>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search users ..." className="input font-semibold md:text-2xl md:input-sm input-bordered  w-full max-w-xs " />
                <select className="select select-bordered select-sm ">
                  <option disabled selected>Filter By</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
            <div className="btn-group">
              <button onClick={() => setDataLayout('Table')} type="button" className={`btn btn-sm ${DataLayout === 'Table' && 'btn-active'}`}>
                <BsTable />
              </button>
              <button onClick={() => setDataLayout('Grid')} type="button" className={`btn btn-sm ${DataLayout === 'Grid' && 'btn-active'}`}>
                <BsFillGrid3X3GapFill />
              </button>

            </div>
          </div>
          {DataLayout === 'Table' ? <UserDataTableLayout /> : <DataGridCardLayout />}

        </div>
      </div>
    </div>
  );
}

export default Users;
