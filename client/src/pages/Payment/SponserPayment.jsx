import React, { useState } from 'react';

const SponserPayment = () => {
  const [payments] = useState([
    { id: 1, sponsor: 'HealthCorp', amount: '$500', date: '2023-10-01', status: 'Paid' },
    { id: 2, sponsor: 'Wellness Inc.', amount: '$300', date: '2023-10-05', status: 'Pending' },
    { id: 3, sponsor: 'LifeCare Ltd.', amount: '$700', date: '2023-10-10', status: 'Paid' },
    { id: 4, sponsor: 'CarePlus', amount: '$400', date: '2023-10-12', status: 'Paid' },
    { id: 5, sponsor: 'MediAid', amount: '$250', date: '2023-10-15', status: 'Pending' },
  ]);

  return (
    <div className="container mt-5">
      <h1>Sponsor Payments</h1>
      <p>Below is the list of payments made by sponsors:</p>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sponsor</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.sponsor}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
              <td>
                <span
                  className={`badge ${
                    payment.status === 'Paid' ? 'bg-success' : 'bg-warning'
                  }`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponserPayment;
