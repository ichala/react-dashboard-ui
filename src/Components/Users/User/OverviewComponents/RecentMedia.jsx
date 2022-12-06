import React from 'react';

const RecentMedia = ({ User }) => (
  <div className="card w-full  bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="card-body p-3">
      <div className="card-title italic opacity-70 m-3">Recent Media</div>
      <div className="flex flex-wrap justify-center gap-2">
        {User.media.map((media) => (
          <div key={media}>
            <div className="avatar flex justify-center">
              <div className="w-60 h-60 mask rounded">
                <img src={media} alt={media} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className=" btn btn-xs btn-primary self-end">View More</button>
    </div>
  </div>
);

export default RecentMedia;
