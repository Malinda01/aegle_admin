import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if approvedSuppliers exists in localStorage
    const storedSuppliers = JSON.parse(localStorage.getItem('approvedSuppliers')) || [];
    if (storedSuppliers.length === 0) {
      // Initialize with default suppliers if localStorage is empty
      const defaultSuppliers = [
        { id: 1, name: 'John Doe', company: 'MediSupply', contact: '123-456-7890', email: 'john.doe@medisupply.com' },
        { id: 2, name: 'Jane Smith', company: 'HealthPlus', contact: '987-654-3210', email: 'jane.smith@healthplus.com' },
        { id: 3, name: 'Emily Davis', company: 'CareFirst', contact: '555-123-4567', email: 'emily.davis@carefirst.com' },
        { id: 4, name: 'Michael Brown', company: 'LifeCare', contact: '444-987-6543', email: 'michael.brown@lifecare.com' },
        { id: 5, name: 'Sarah Wilson', company: 'WellnessSupply', contact: '333-654-7890', email: 'sarah.wilson@wellnesssupply.com' },
      ];
      localStorage.setItem('approvedSuppliers', JSON.stringify(defaultSuppliers));
      setSuppliers(defaultSuppliers);
    } else {
      setSuppliers(storedSuppliers);
    }
  }, []);

  const handleUpdate = (id) => {
    navigate(`/suppliers/edit/${id}`); // Navigate to the supplier editing page
  };

  const handleDelete = (id) => {
    const updatedSuppliers = suppliers.filter((supplier) => supplier.id !== id);
    setSuppliers(updatedSuppliers);
    localStorage.setItem('approvedSuppliers', JSON.stringify(updatedSuppliers));
    alert(`Supplier with ID ${id} has been deleted.`);
  };

  return (
    <div className="container mt-5">
      <h2>All Suppliers</h2>
      <p className="text-muted">Below is the list of all suppliers:</p>
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
          {suppliers.length > 0 ? (
            suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.company}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleUpdate(supplier.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(supplier.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No suppliers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;
