import React from 'react';
import {
  FaDiscord,
  FaFacebookSquare, FaGoogle, FaInstagram, FaTwitter,
} from 'react-icons/fa';

const AccountsLinkedSocials = () => (
  <div className="card bg-base-100 p-3 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   ">
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
        <input type="checkbox" className="toggle toggle-primary" checked readOnly />
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
        <input type="checkbox" className="toggle toggle-primary" checked readOnly />
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
);

export default AccountsLinkedSocials;
