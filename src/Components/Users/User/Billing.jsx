import React from 'react';
import { useOutletContext } from 'react-router-dom';
import PaymentMethods from './BillingComponents/PaymentMethods';
import RecentTransactions from './BillingComponents/RecentTransactions';

const Billing = () => {
  const { User } = useOutletContext();

  return (
    <>
      <div className="flex flex-col gap-2">
        <PaymentMethods User={User} />
        <RecentTransactions inovices={User.inovices} />
      </div>
    </>
  );
};

export default Billing;
