import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch supplier data (replace with actual API call)
    const fetchedSuppliers = [
      { id: 1, name: 'Alice Johnson', company: 'SupplyCo', contact: '123-456-7890', email: 'alice.johnson@supplyco.com' },
      { id: 2, name: 'Bob Williams', company: 'Global Supplies', contact: '987-654-3210', email: 'bob.williams@globalsupplies.com' },
      { id: 3, name: 'Charlie Brown', company: 'MediSupply', contact: '555-123-4567', email: 'charlie.brown@medisupply.com' },
      { id: 4, name: 'Diana Prince', company: 'HealthFirst', contact: '444-987-6543', email: 'diana.prince@healthfirst.com' },
      { id: 5, name: 'Ethan Hunt', company: 'LifeCare', contact: '333-654-7890', email: 'ethan.hunt@lifecare.com' },
      { id: 6, name: 'Fiona Gallagher', company: 'WellnessSupply', contact: '222-321-6549', email: 'fiona.gallagher@wellnesssupply.com' },
      { id: 7, name: 'George Smith', company: 'CarePlus', contact: '111-789-4560', email: 'george.smith@careplus.com' },
    ];
    setSuppliers(fetchedSuppliers);
    setFilteredSuppliers(fetchedSuppliers); // Initialize filtered suppliers
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(term) || supplier.company.toLowerCase().includes(term)
    );
    setFilteredSuppliers(filtered);
  };

  const handleApprove = (id) => {
    console.log(`Supplier with ID ${id} approved.`);
    alert(`Supplier with ID ${id} has been approved.`);
    // Add logic to update the supplier's status in the backend
  };

  const handleDecline = (id) => {
    console.log(`Supplier with ID ${id} declined.`);
    alert(`Supplier with ID ${id} has been declined.`);
    // Add logic to update the supplier's status in the backend
  };

  const handleAddSupplier = () => {
    navigate('/suppliers/add'); // Navigate to the Add Supplier page
  };

  const handleSupplierList = () => {
    navigate('/suppliers/list'); // Navigate to the Supplier List page
  };

  return (
    <div className="container mt-5">
      <h2>Manage Suppliers</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or company"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <button className="btn btn-primary me-2" onClick={handleAddSupplier}>
            Add Supplier
          </button>
          <button className="btn btn-secondary" onClick={handleSupplierList}>
            Supplier List
          </button>
        </div>
      </div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.company}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.email}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(supplier.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDecline(supplier.id)}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSuppliers;
