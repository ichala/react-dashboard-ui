function SmallStatsCard({
  icon, title, stats, change, loading,
}) {
  return (
    loading ? (
      <div className="card glass lg:w-[23%]   w-full bg-base-100 shadow-md ">
        <div className="card-body p-2 flex flex-row justify-arround items-center ">
          <div className="animate-pulse flex w-full space-x-4">
            <div className="icon p-4 rounded-lg h-10 w-10 bg-base-300" />
            <div className="flex flex-col w-full justify-start">
              <div className="flex w-full">
                <div className="h-2 w-full  m-3 bg-base-300 rounded" />
              </div>
              <div className="h-2 m-3 w-[30%]  bg-base-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
      : (
        <div className="card glass lg:w-[23%]   w-full bg-base-100 shadow-md">
          <div className="card-body p-2 flex flex-row justify-arround items-center">
            <div className="icon p-4 rounded-lg">{icon}</div>
            <div className="flex flex-col justify-start">
              <div className="flex">
                <h2 className="card-title ">{stats}</h2>
                <span className={`text-sm font-semibold ml-1 ${Number(change) > 0 ? 'text-success ' : 'text-error'}`}>
                  {change}
                  %
                </span>
              </div>

              <h2 className=" text-md">{title}</h2>
            </div>
          </div>
        </div>
      )
  );
}

export default SmallStatsCard;
