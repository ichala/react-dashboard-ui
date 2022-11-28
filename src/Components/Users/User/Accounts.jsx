import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import {
  FaDiscord,
  FaFacebookSquare, FaGoogle, FaInstagram, FaTwitter,
} from 'react-icons/fa';

const Accounts = () => {
  const { User } = useOutletContext();
  return (
    <>
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
      <div className="card  p-3 text-base-content bg-base-100   ">
        <div className="card-body p-1">
          <div className="card-title opacity-70 m-1 italic">Linked Accounts</div>
          <div className="flex justify-between  w-full">
            <div className="flex items-center justify-start gap-1">
              <span><FaFacebookSquare size={40} /></span>
              <div className="flex flex-col justify-start items-start ">
                <span className="text-md font-semibold">Facebook</span>
                <span className="text-primary opacity-60">Not linked</span>
              </div>
            </div>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <div className="flex justify-between  w-full">
            <div className="flex items-center justify-start gap-1">
              <span><FaTwitter size={40} /></span>
              <div className="flex flex-col justify-start items-start ">
                <span className="text-md font-semibold">Twitter</span>
                <span className="text-primary">@_ichala</span>
              </div>
            </div>
            <input type="checkbox" className="toggle toggle-primary" checked />
          </div>
          <div className="flex justify-between  w-full">
            <div className="flex items-center justify-start gap-1">
              <span><FaInstagram size={40} /></span>
              <div className="flex flex-col justify-start items-start ">
                <span className="text-md font-semibold">Instagram</span>
                <span className="text-primary opacity-60">Not linked</span>
              </div>
            </div>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <div className="flex justify-between  w-full">
            <div className="flex items-center justify-start gap-1">
              <span><FaDiscord size={40} /></span>
              <div className="flex flex-col justify-start items-start ">
                <span className="text-md font-semibold">Discord</span>
                <span className="text-primary">iChala-#8362</span>
              </div>
            </div>
            <input type="checkbox" className="toggle toggle-primary" checked />
          </div>
          <div className="flex justify-between  w-full">
            <div className="flex items-center justify-start gap-1">
              <span><FaGoogle size={40} /></span>
              <div className="flex flex-col justify-start items-start ">
                <span className="text-md font-semibold">Google</span>
                <span className="text-primary opacity-60">Not linked</span>
              </div>
            </div>
            <input type="checkbox" className="toggle toggle-primary" disabled />
          </div>
        </div>
      </div>
      <div className="card  p-3 text-base-content  ">
        <div className="card-body p-1">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="btn btn-primary btn-sm "
            >
              Send Verification Email
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm "
            >
              Send Password Reset
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm "
            >
              Send Email Reset
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm "
            >
              Send Offer Email
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
