import React from 'react';
import {
  FiUserMinus, FiUserPlus, FiUsers, FiUserX,
} from 'react-icons/fi';

import {
  BsFillGrid3X3GapFill, BsListUl, BsTable,
} from 'react-icons/bs';
import SmallStatsCard from '../../Components/Sidebar/Cards/SmallStatsCard';
import DataGridCardLayout from '../../Components/DataGridCardLayout/DataGridCardLayout';

function Users() {
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
          <div className="card-actions justify-end">
            <div className="btn-group">
              <button type="button" className="btn btn-sm  ">
                <BsTable />
              </button>
              <button type="button" className="btn btn-sm btn-active">
                <BsFillGrid3X3GapFill />
              </button>
              <button type="button" className="btn btn-sm">
                <BsListUl />
              </button>
            </div>
          </div>
          <DataGridCardLayout />
        </div>
      </div>
    </div>
  );
}

export default Users;
