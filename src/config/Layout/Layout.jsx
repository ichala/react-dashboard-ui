import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Layout({ children }) {
  return (
    <>
      <div className="bg-base-100 text-white h-screen">
        <Sidebar>
          {children}
        </Sidebar>
      </div>
    </>
  );
}

export default Layout;
