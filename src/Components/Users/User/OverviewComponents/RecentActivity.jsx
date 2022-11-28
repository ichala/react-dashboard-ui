import React from 'react';
import { HiHandThumbUp, HiShare } from 'react-icons/hi2';
import { BiCommentDetail } from 'react-icons/bi';
import ActivityCard from './ActivityCard';

const RecentActivity = () => (
  <div className="card w-full 2xl:w-1/2  bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="card-body p-3">
      <div className="card-title opacity-70 m-1 italic">Recent Activity</div>
      <div className="flex flex-col gap-2 w-full">
        <ActivityCard icon={<HiHandThumbUp />} date="22/02/2021 12:00" desc={'liked Ali\'s post with 256 Others '} />
        <ActivityCard icon={<BiCommentDetail />} date="22/02/2021 16:00" desc={'commented "wow amazing ! 🤩😮" on jenifer\'s post '} />
        <ActivityCard icon={<HiHandThumbUp />} date="04/01/2021 01:24" desc={'liked Mohsen\'s post with 2 Others '} />
        <ActivityCard icon={<HiShare />} date="22/02/2021 12:00" desc={'Shared DailyNews\'s post'} />
        <button type="button" className=" btn btn-xs btn-primary self-center">View More</button>
      </div>
    </div>
  </div>

);

export default RecentActivity;
