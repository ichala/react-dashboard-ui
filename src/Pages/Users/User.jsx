import React, { useContext, useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import {
  useNavigate, useParams,
} from 'react-router-dom';
import UserBasicInformations from '../../Components/Users/User/UserComponents/UserBasicInformations';
import UserNavTabs from '../../Components/Users/User/UserComponents/UserNavTabs';
import UserSocials from '../../Components/Users/User/UserComponents/UserSocials';
import { DataContext } from '../../config/Context/database';

function User() {
  const { id } = useParams();
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
        navigate('overview');
      }, 1000);
    };
    getUser();
  }, [Users, id, navigate]);
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
        <UserNavTabs />
      </div>
    </div>
  );
}

export default User;
