import React from 'react';
import moment from 'moment/moment';

const RecentTransactions = ({ inovices }) => (
  <div className="card bg-base-100 p-3 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   ">
    <div className="card-body p-1">
      <div className="card-title opacity-70 m-1 italic">Recent Transactions</div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th colSpan={2}>ID</th>
              <th>Type</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {inovices.map((item) => (
              <>
                <tr key={item.id}>
                  <th colSpan={2}>
                    #
                    {item.id.slice(0, 7)}
                  </th>
                  <td>{item.typeof}</td>
                  <td>{`${item.amount} $`}</td>
                  <td>{item.payment}</td>
                  <td>
                    {`${moment(item.date, 'YYYYMMDD').fromNow(true)} ` }
                    ago
                  </td>
                  <td>

                    {item.status === 'Paid' && <span className="badge badge-success">{item.status}</span>}
                    {item.status === 'Canceled' && <span className="badge badge-error">{item.status}</span>}
                    {item.status === 'Pending' && <span className="badge badge-warning">{item.status}</span>}

                  </td>
                </tr>
              </>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  </div>
);

export default RecentTransactions;
