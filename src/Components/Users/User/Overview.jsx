import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../../config/Context/database';
import InteractionsChart from './OverviewComponents/InteractionsChart';
import AboutUser from './OverviewComponents/AboutUser';
import RecentActivity from './OverviewComponents/RecentActivity';
import RecentMedia from './OverviewComponents/RecentMedia';

const Overview = () => {
  const { id } = useParams();
  const { Users } = useContext(DataContext);
  const User = Users.find((u) => u.id === id);

  return (
    <>
      <div className="flex flex-col gap-2">
        <AboutUser />
        <div className="flex flex-col 2xl:flex-row gap-2">
          <RecentActivity />
          <InteractionsChart />
        </div>
        <RecentMedia User={User} />
      </div>
    </>
  );
};

export default Overview;
