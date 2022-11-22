import React from 'react';
import UserCard from '../../Sidebar/Cards/UserCard';

function DataGridCardLayout() {
  return (
    <>
      <div className="flex justify-center m-4">
        <input type="text" placeholder="Search ..." className="input font-semibold md:text-2xl md:input-lg input-bordered  md:w-4/5 w-full " />
      </div>
      <div className="flex justify-center gap-5 flex-wrap items-center">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}

export default DataGridCardLayout;
