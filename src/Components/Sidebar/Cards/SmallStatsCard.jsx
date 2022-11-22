import React from 'react';

function SmallStatsCard({
  icon, title, stats, change,
}) {
  return (
    <div className={`card glass lg:w-[23%] ${Number(change) > 0 ? 'bg-success text-success-content ' : 'bg-error text-error-content'}  w-full bg-base-100 shadow-md`}>
      <div className="card-body p-2 flex flex-row justify-arround items-center">
        <div className="icon p-4 rounded-lg">{icon}</div>
        <div className="flex flex-col justify-start">
          <div className="flex">
            <h2 className="card-title">{stats}</h2>
            <span className="text-sm font-semibold ml-1 ">
              {change}
              %
            </span>
          </div>

          <h2 className=" text-md">{title}</h2>
        </div>

      </div>
    </div>
  );
}

export default SmallStatsCard;