import React, { useContext, useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import {
  Outlet,
  useLocation,
  useNavigate, useParams,
} from 'react-router-dom';
import UserBasicInformations from '../../Components/Users/User/UserComponents/UserBasicInformations';
import UserNavTabs from '../../Components/Users/User/UserComponents/UserNavTabs';
import UserSocials from '../../Components/Users/User/UserComponents/UserSocials';
import { DataContext } from '../../config/Context/database';

function User() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { Users } = useContext(DataContext);
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const User = await Users.find((u) => u.id === id);
      // Simulate Api Calls
      setTimeout(async () => {
        setUser(User);
        setLoading(false);
        if (location.key === 'default' || location.pathname.toLowerCase() === `/users/${id}`) {
          navigate('overview');
        }
      }, 1000);
    };
    getUser();
  }, []);
  if (Loading) {
    return 'loading';
  }
  if (!User) {
    return (
      <div className="flex justify-center p-4">
        <div className="alert self-center p-4 m-2 alert-error italic font-semibold max-w-md shadow-lg">
          <div>
            <BsInfoCircleFill size={20} />
            <span>User Not Found</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto md:p-4">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-4/12">
          <UserBasicInformations User={User} />
          <UserSocials Users={Users} />
        </div>
        <div className="px-4 mt-5 xl:mt-0 w-full xl:w-3/4 ">
          <UserNavTabs />
          <div className="md:p-4 text-base-content mt-5 md:mt-0">
            <Outlet context={{ User }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
