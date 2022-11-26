import React from 'react';

function ActivityCard({ icon, date, desc }) {
  return (
    <div className="card  bg-base-200/60 rounded">
      <div className="card-body p-2 ">
        <div className="flex justify-left items-center gap-3">
          <span className="p-2 bg-primary text-primary-content rounded">
            {icon}
          </span>
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-base-content font-semibold capitalize">
              {desc}
            </p>
            <p className="text-xs text-base-content opacity-70">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
