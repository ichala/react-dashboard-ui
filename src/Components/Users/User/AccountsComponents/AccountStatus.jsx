import React from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';

const AccountStatus = ({ User }) => (
  <div className="card  p-3 text-base-content    ">
    <div className="card-body p-1">
      <div className="card-title opacity-70 m-1 italic">Account Status</div>
      <div className="flex md:flex-row flex-col w-full">
        <div className="flex md:w-1/2 flex-col italic justify-start gap-2 mt-2  opacity-70 font-semibold">
          <div className="flex gap-2">
            <span> Status:</span>
            {User.verified ? (
              <span
                className=" text-primary  italic"
              >
                Verified
              </span>
            ) : (
              <span
                className="text-primary  italic"
              >
                Not Verified
              </span>
            )}

          </div>
          <div className="flex gap-2 items-center">
            <span>Verified at :</span>
            {User.verified ? (
              <span>
                22/12/2020 10:00AM
              </span>
            ) : (
              <span>
                N/A
              </span>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <span className="">Verified With :</span>
            {User.verified ? (
              <span>
                Passport
              </span>
            ) : (
              <span>
                N/A
              </span>
            )}
            {' '}

          </div>
        </div>
        <div className="flex md:w-1/2 flex-col italic justify-start gap-2 mt-2  opacity-70 font-semibold">
          <span>Documents:</span>
          <span className="flex gap-2 items-center">
            <AiOutlineFileImage size={20} />
            image_827238JQSH.png
          </span>
          <span className="flex gap-2 items-center">
            <AiOutlineFileImage size={20} />
            image_82767VBCSS.png
          </span>

        </div>
      </div>
    </div>
  </div>
);

export default AccountStatus;
