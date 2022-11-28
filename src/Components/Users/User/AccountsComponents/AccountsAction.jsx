import React from 'react';

const AccountsAction = () => (
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
);

export default AccountsAction;
