import React from 'react';

const UsersLoading = () => (
  <div className="container mx-auto md:p-4 animate-pulse">
    <div className="flex flex-col xl:flex-row">
      <div className="w-full xl:w-4/12">
        <div className="card w-full bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="card-body">
            <div className="flex justify-center h-80 items-center flex-col gap-3">
              <div className="rounded-full bg-base-300 h-20 w-20" />
              <div className="flex flex-col justify-between gap-3">
                <div className="rounded-lg h-3 w-80 bg-base-300" />
                <div className="rounded-lg h-3 w-80 bg-base-300" />
                <div className="rounded-lg h-3 w-80 bg-base-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 text-base-content mt-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="card-body">
            <div className="flex justify-center h-80 items-center flex-col gap-3">
              <div className="flex flex-col justify-between gap-3">
                <div className="rounded-lg h-3 w-80 bg-base-300" />
                <div className="rounded-lg h-3 w-80 bg-base-300" />
                <div className="rounded-lg h-3 w-80 bg-base-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-5 xl:mt-0 w-full xl:w-3/4 ">
        <div className="flex justify-between gap-3 p-4">
          <div className="rounded-lg h-3 w-80 bg-base-300" />
          <div className="rounded-lg h-3 w-80 bg-base-300" />
          <div className="rounded-lg h-3 w-80 bg-base-300" />
          <div className="rounded-lg h-3 w-80 bg-base-300" />
        </div>
        <div className="md:p-4 text-base-content mt-5 md:mt-0">
          <div className="card w-full bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="card-body">
              <div className="flex justify-center h-96 items-center flex-col gap-3">
                <div className="flex flex-col justify-between gap-3">
                  <div className="rounded-lg h-3 w-80 bg-base-300" />
                  <div className="rounded-lg h-3 w-80 bg-base-300" />
                  <div className="rounded-lg h-3 w-80 bg-base-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UsersLoading;
