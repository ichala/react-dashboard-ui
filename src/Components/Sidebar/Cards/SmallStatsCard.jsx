import React from 'react';
import { faker } from '@faker-js/faker';

function SmallStatsCard({
  icon, title, stats, change,
}) {
  const user = {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
  console.log(user);
  return (
    <div className="card glass lg:w-[23%]   w-full bg-base-100 shadow-md">
      <div className="card-body p-2 flex flex-row justify-arround items-center">
        <div className="icon p-4 rounded-lg">{icon}</div>
        <div className="flex flex-col justify-start">
          <div className="flex">
            <h2 className="card-title ">{stats}</h2>
            <span className={`text-sm font-semibold ml-1 ${Number(change) > 0 ? 'text-success ' : 'text-error'}`}>
              {change}
              %
            </span>
          </div>

          <h2 className=" text-md">{title}</h2>
        </div>

      </div>
    </div>
  );
}

export default SmallStatsCard;
