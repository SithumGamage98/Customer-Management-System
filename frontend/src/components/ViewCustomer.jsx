// src/ViewCustomer.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ViewCustomer.css';

const ViewCustomer = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/customers/${id}`
        );
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomer();
  }, [id]);

  return (
    <div className="customer-details">
      <h2>Customer Details</h2>

      <div className="center-container">
        {/* Display the NIC Image if available */}
        {customer.nicImage && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={`data:image/jpeg;base64,${customer.nicImage}`}
            alt="NIC Image"
            className="nic-image"
            style={{ width: '47%' }}
          />
        )}
      </div>

      <ul>
        <li>
          <b>ID</b>: {customer.id}
        </li>
        <li>
          <b>Name</b>: {customer.name}
        </li>
        <li>
          <b>Date of Birth</b>: {customer.dateOfBirth}
        </li>
        <li>
          <b>NIC Number</b>: {customer.nicNumber}
        </li>
        <li>
          <b>Mobile Numbers</b>:{' '}
          {customer.mobileNumbers && customer.mobileNumbers.join(', ')}
        </li>
      </ul>

      <div className="family-members">
        <h3>Family Members</h3>
        <ul>
          {customer.familyMembers &&
            customer.familyMembers.map((familyMember) => (
              <li key={familyMember.id}>{familyMember.name}</li>
            ))}
        </ul>
      </div>

      <div className="addresses">
        <h3>Addresses</h3>
        <ul>
          {customer.addresses &&
            customer.addresses.map((address) => (
              <li key={address.id} className="address-details">
                <strong>Address Line 1:</strong> {address.addressLine1} <br />
                <strong>Address Line 2:</strong> {address.addressLine2} <br />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewCustomer;
