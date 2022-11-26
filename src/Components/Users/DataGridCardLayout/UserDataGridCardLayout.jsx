import React from 'react';
import UserCard from '../../Cards/UserCard';

function DataGridCardLayout({ Users, setSelectedUser }) {
  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap items-center">
        {Users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </div>
    </>
  );
}

export default DataGridCardLayout;
