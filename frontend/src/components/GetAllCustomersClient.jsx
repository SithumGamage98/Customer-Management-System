// src/GetAllCustomers.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './GetAllCustomersClient.css';

const CustomerCard = ({ customer, onUpdate, onView, onDelete }) => {
  return (
    <div className="customer-card" key={customer.id}>
      <h3>{customer.name}</h3>
      <p>ID: {customer.id}</p>
      <p>Date of Birth: {customer.dateOfBirth}</p>
      <p>NIC Number: {customer.nicNumber}</p>
      <div className="actions">
        <button
          style={{ backgroundColor: '#483D8B' }}
          onClick={() => onView(customer.id)}
        >
          View
        </button>
      </div>
    </div>
  );
};

const GetAllCustomersClient = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all customers from the backend when the component mounts
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleView = (id) => {
    // Use the navigate function to navigate to the ViewCustomer component
    navigate(`/customers/${id}`);
  };

  return (
    <div style={{ textAlign: 'center', height: '700px' }}>
      <h2 style={{ textAlign: 'center' }}>All Customers</h2>
      <div className="customer-cards">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onView={handleView}
          />
        ))}
      </div>
    </div>
  );
};

export default GetAllCustomersClient;
