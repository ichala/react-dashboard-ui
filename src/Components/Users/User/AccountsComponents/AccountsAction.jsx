import React from 'react';
import toast from 'react-hot-toast';

const AccountsAction = () => {
  const sendEmail = (message) => {
    toast.success(message);
  };
  return (
    <div className="card  p-3 text-base-content  ">
      <div className="card-body p-1">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="btn btn-primary btn-sm "
            onClick={() => { sendEmail('Verification link sent'); }}
          >
            Send Verification Email
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm "
            onClick={() => { sendEmail('Password reset link sent'); }}
          >
            Send Password Reset
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm "
            onClick={() => { sendEmail('Email reset link sent'); }}
          >
            Send Email Reset
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm "
            onClick={() => { sendEmail('Offer email sent'); }}
          >
            Send Offer Email
          </button>

        </div>
      </div>
    </div>
  );
};

export default AccountsAction;
