import React, { useContext } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { ThemeContext } from '../Context/theme';

function Layout({ children }) {
  const { Theme } = useContext(ThemeContext);
  return (
    <>
      <div data-theme={Theme} className="bg-base-200 text-white ">
        <Sidebar>
          {children}
        </Sidebar>
      </div>
    </>
  );
}

export default Layout;
