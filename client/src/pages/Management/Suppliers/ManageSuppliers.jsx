import React, { useState, useEffect } from 'react';

const ManageSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Fetch supplier data (replace with actual API call)
    const fetchedSuppliers = [
      { id: 1, name: 'Alice Johnson', company: 'SupplyCo', contact: '123-456-7890', email: 'alice.johnson@supplyco.com' },
      { id: 2, name: 'Bob Williams', company: 'Global Supplies', contact: '987-654-3210', email: 'bob.williams@globalsupplies.com' },
    ];
    setSuppliers(fetchedSuppliers);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Manage Suppliers</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.company}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSuppliers;
