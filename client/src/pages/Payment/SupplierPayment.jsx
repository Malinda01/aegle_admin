import React, { useState } from 'react';

const SupplierPayment = () => {
  const [payments] = useState([
    { id: 1, supplier: 'MediSupply', amount: '$1,200', date: '2023-10-01', status: 'Paid' },
    { id: 2, supplier: 'HealthPlus', amount: '$800', date: '2023-10-05', status: 'Pending' },
    { id: 3, supplier: 'CareFirst', amount: '$1,500', date: '2023-10-10', status: 'Paid' },
    { id: 4, supplier: 'LifeCare', amount: '$1,000', date: '2023-10-12', status: 'Paid' },
    { id: 5, supplier: 'WellnessSupply', amount: '$600', date: '2023-10-15', status: 'Pending' },
  ]);

  return (
    <div className="container mt-5">
      <h1>Supplier Payments</h1>
      <p>Below is the list of payments made to suppliers:</p>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.supplier}</td>
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

export default SupplierPayment;
