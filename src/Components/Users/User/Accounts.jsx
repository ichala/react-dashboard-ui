import React from 'react';
import { useOutletContext } from 'react-router-dom';

import AccountStatus from './AccountsComponents/AccountStatus';
import AccountsAction from './AccountsComponents/AccountsAction';
import AccountsLinkedSocials from './AccountsComponents/AccountsLinkedSocials';

const Accounts = () => {
  const { User } = useOutletContext();
  return (
    <>
      <AccountStatus User={User} />
      <AccountsLinkedSocials />
      <AccountsAction />
    </>
  );
};

export default Accounts;
