import React, { useState } from 'react';

const CommissionHistory = () => {
  const [commissions] = useState([
    { id: 1, doctor: 'Dr. John Doe', amount: '$500', date: '2023-10-01', status: 'Paid' },
    { id: 2, doctor: 'Dr. Jane Smith', amount: '$300', date: '2023-10-05', status: 'Paid' },
    { id: 3, doctor: 'Dr. Emily Davis', amount: '$700', date: '2023-10-10', status: 'Paid' },
    { id: 4, doctor: 'Dr. Michael Brown', amount: '$400', date: '2023-10-12', status: 'Pending' },
    { id: 5, doctor: 'Dr. Sarah Wilson', amount: '$250', date: '2023-10-15', status: 'Paid' },
  ]);

  return (
    <div className="container mt-5">
      <h1>Doctor Commission History</h1>
      <p>Below is the history of commission payments made to doctors:</p>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {commissions.map((commission) => (
            <tr key={commission.id}>
              <td>{commission.id}</td>
              <td>{commission.doctor}</td>
              <td>{commission.amount}</td>
              <td>{commission.date}</td>
              <td>
                <span
                  className={`badge ${
                    commission.status === 'Paid' ? 'bg-success' : 'bg-warning'
                  }`}
                >
                  {commission.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommissionHistory;
