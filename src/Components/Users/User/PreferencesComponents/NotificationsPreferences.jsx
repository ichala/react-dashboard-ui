import React from 'react';

const NotificationsPreferences = () => (
  <div className="card   ">
    <div className="card-body p-1">
      <div className="card-title opacity-70 m-1 italic">Notifications:</div>
      <div className="overflow-x-auto ">
        <table className="table w-full text-center">

          <tbody>
            <tr className="font-bold">
              <td>/</td>
              <td>
                Email
              </td>
              <td>
                Website
              </td>
              <td>
                Mobile
              </td>
            </tr>
            <tr>
              <td>New Login Location</td>
              <td>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" disabled className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              </td>
            </tr>
            <tr>
              <td>News & Offers</td>
              <td>
                <input type="checkbox" disabled className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              </td>
            </tr>
            <tr>
              <td>Updates & Patch Notes</td>
              <td>
                <input type="checkbox" defaultChecked disabled className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
              <td>
                <input type="checkbox" defaultChecked disabled className="checkbox checkbox-primary" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default NotificationsPreferences;
