import React, { useEffect, useState } from 'react';
import {
  FiUserMinus, FiUserPlus, FiUsers, FiUserX,
} from 'react-icons/fi';

import {
  BsFillGrid3X3GapFill, BsTable,
} from 'react-icons/bs';
import SmallStatsCard from '../../Components/Cards/SmallStatsCard';
import DataGridCardLayout from '../../Components/Users/DataGridCardLayout/UserDataGridCardLayout';
import UserDataTableLayout from '../../Components/Users/DataGridCardLayout/UserDataTableLayout';
import createRandomUser from '../../@FakeDB/generate';
import AddUser from '../../Components/Users/DataGridCardLayout/AddUser';
import EditUser from '../../Components/Users/DataGridCardLayout/EditUser';

function Users() {
  const [DataLayout, setDataLayout] = useState('Table');
  const [Users, setUsers] = useState([]);
  const [FiltredUsers, setFiltredUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [SelectedUser, setSelectedUser] = useState(null);
  const filterUsers = (text) => {
    setFiltredUsers(
      Users.filter((user) => user.firstName.toLowerCase().includes(text.toLowerCase())
        || user.lastName.toLowerCase().includes(text.toLowerCase())
         || user.email.toLowerCase().includes(text.toLowerCase())
          || user.status.toLowerCase().includes(text.toLowerCase())
          || user.sex.toLowerCase().includes(text.toLowerCase())),
    );
  };
  useEffect(() => {
    const GeneratedUsers = [];
    Array.from({ length: 10 }).forEach(() => {
      GeneratedUsers.push(createRandomUser());
    });
    // Simulate Api Calls
    setTimeout(() => {
      setUsers(GeneratedUsers);
      setFiltredUsers(GeneratedUsers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-base-content">
        {Loading ? (
          <>
            <div className="flex  justify-center w-full items-center lg:flex-row flex-col gap-1 p-4 flex-wrap">
              <SmallStatsCard loading icon={<FiUsers size={25} />} stats="2500" title="Total" change="+15" />
              <SmallStatsCard loading icon={<FiUserPlus size={25} />} stats="203" title="New" change="-10" />
              <SmallStatsCard loading icon={<FiUserMinus size={25} />} stats="9" title="Deleted" change="-22" />
              <SmallStatsCard loading icon={<FiUserX size={25} />} stats="107" title="Banned" change="-34" />
            </div>
            <div className="card w-full bg-base-100 h-[300px] shadow-md px-5">
              <div className="card-body ">
                <div className="animate-pulse  w-full space-x-4">
                  <div className="flex justify-between">
                    <div className="rounded-lg h-7 w-20 bg-base-300" />
                    <div className="rounded-lg h-7 w-60 bg-base-300" />
                    <div className="rounded-lg h-7 w-20 bg-base-300" />
                  </div>
                  <div className="flex flex-col w-full justify-start gap-5 mt-10">
                    <div className="h-2 w-full  bg-base-300 rounded" />
                    <div className="h-2 w-full  bg-base-300 rounded" />
                    <div className="h-2 w-full bg-base-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
          : (
            <>
              <div className="flex  justify-center w-full items-center lg:flex-row flex-col gap-1 p-4 flex-wrap">
                <SmallStatsCard icon={<FiUsers size={25} />} stats="2500" title="Total" change="+15" />
                <SmallStatsCard icon={<FiUserPlus size={25} />} stats="203" title="New" change="-10" />
                <SmallStatsCard icon={<FiUserMinus size={25} />} stats="9" title="Deleted" change="-22" />
                <SmallStatsCard icon={<FiUserX size={25} />} stats="107" title="Banned" change="-34" />
              </div>
              <div className="card w-full bg-base-100 shadow-md">
                <div className="card-body">
                  <div className="card-actions justify-between items-center px-5">
                    <AddUser />
                    {SelectedUser && (
                    <EditUser
                      user={SelectedUser}
                      setSelectedUser={setSelectedUser}
                    />
                    )}
                    <input onChange={(e) => filterUsers(e.target.value)} type="text" placeholder="Search Name/Status/Sex..." className="input focus:outline-0 font-semibold md:text-2xl md:input-sm input-bordered  w-full max-w-xs " />
                    <div className="btn-group">
                      <button onClick={() => setDataLayout('Table')} type="button" className={`btn btn-sm ${DataLayout === 'Table' && 'btn-active'}`}>
                        <BsTable />
                      </button>
                      <button onClick={() => setDataLayout('Grid')} type="button" className={`btn btn-sm ${DataLayout === 'Grid' && 'btn-active'}`}>
                        <BsFillGrid3X3GapFill />
                      </button>
                    </div>
                  </div>
                  {DataLayout === 'Table' ? <UserDataTableLayout Users={FiltredUsers} setSelectedUser={setSelectedUser} /> : <DataGridCardLayout Users={FiltredUsers} setSelectedUser={setSelectedUser} />}
                  <div className="btn-group flex justify-center w-full mt-4">
                    <button type="button" className="btn">«</button>
                    <button type="button" className="btn">Page 1</button>
                    <button
                      type="button"
                      className="btn"
                    >
                      »
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Users;
