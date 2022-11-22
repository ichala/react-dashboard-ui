import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Layout({ children }) {
  return (
    <>
      <div className="bg-base-200 text-white ">
        <Sidebar>
          {children}
        </Sidebar>
      </div>
    </>
  );
}

export default Layout;
