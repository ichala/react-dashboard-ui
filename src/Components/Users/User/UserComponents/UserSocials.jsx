import React from 'react';

const UserSocials = ({ Users }) => (
  <div className="card w-full mt-5 bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="card-body p-3">
      <div className="card-title opacity-70 m-1 italic">User Socials</div>
      <span className="opacity-70 text-sm font-semibold">Friends</span>
      <hr />
      <div className="flex flex-wrap justify-center">
        <div className="avatar-group 2xl:-space-x-6 -space-x-8">
          {Users.slice(1, 10).map((user) => (
            <div key={user.id}>
              <div className="avatar border-base-300">
                <div className="w-12 border-base-300">
                  <img alt={user.name} src={user.avatar} />
                </div>
              </div>
            </div>
          ))}
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span className="text-sm">+1.2k</span>
            </div>
          </div>
        </div>
      </div>

      <span className="opacity-70 text-sm font-semibold">Followers</span>
      <hr />
      <div className="flex flex-wrap justify-center">
        <div className="avatar-group 2xl:-space-x-6 -space-x-8">
          {Users.slice(11, 20).map((user) => (
            <div key={user.id}>
              <div className="avatar border-base-300">
                <div className="w-12 border-base-300">
                  <img alt={user.name} src={user.avatar} />
                </div>
              </div>
            </div>
          ))}
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span className="text-sm">+148k</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className=" btn btn-xs btn-primary self-center mt-5">View All</button>
    </div>
  </div>
);

export default UserSocials;
