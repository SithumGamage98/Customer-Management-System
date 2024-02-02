// src/AddCustomer.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AddCustomer.css';
import { useParams, useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    name: '',
    dateOfBirth: '',
    nicNumber: '',
    mobileNumbers: [],
    familyMembers: [],
    addresses: [],
  });

  const [nicImage, setNicImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFamilyMemberChange = (index, e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => {
      const updatedFamilyMembers = [...prevData.familyMembers];
      updatedFamilyMembers[index] = {
        ...updatedFamilyMembers[index],
        [name]: value,
      };
      return { ...prevData, familyMembers: updatedFamilyMembers };
    });
  };

  const navigate = useNavigate();

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => {
      const updatedAddresses = [...prevData.addresses];
      updatedAddresses[index] = { ...updatedAddresses[index], [name]: value };
      return { ...prevData, addresses: updatedAddresses };
    });
  };

  const handleMobileNumbersChange = (e) => {
    const { value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      mobileNumbers: value.split(','),
    }));
  };

  const handleFamilyMemberAdd = () => {
    setCustomerData((prevData) => ({
      ...prevData,
      familyMembers: [...prevData.familyMembers, { name: '' }],
    }));
  };

  const handleAddressAdd = () => {
    setCustomerData((prevData) => ({
      ...prevData,
      addresses: [
        ...prevData.addresses,
        { addressLine1: '', addressLine2: '', city: '', country: '' },
      ],
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNicImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object for multipart/form-data
      const formData = new FormData();
      formData.append('nicImage', nicImage);
      formData.append('customer', JSON.stringify(customerData));

      // Send a POST request to the backend API
      const response = await axios.post(
        'http://localhost:8080/api/customers',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle success (e.g., redirect, show success message)
      console.log('Customer added successfully:', response.data);
      alert('Customer added successfully');
      navigate('/');

      // Optionally, reset the form or perform other actions
      setCustomerData({
        name: '',
        dateOfBirth: '',
        nicNumber: '',
        mobileNumbers: [],
        familyMembers: [],
        addresses: [],
      });
      setNicImage(null);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error adding customer:', error);

      if (
        error.response &&
        error.response.data.includes('NIC number already exists')
      ) {
        alert('NIC number is not unique. Please use a unique NIC number.');
      } else {
        alert('Customer added unsuccessfully');
      }
    }
  };

  return (
    <div className="add-customer-container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit} className="customer-form">
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={customerData.name}
          onChange={handleChange}
          required
        />

        <br />

        <label>
          NIC Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        <br />

        <label>Date of Birth :</label>
        <input
          type="date"
          name="dateOfBirth"
          value={customerData.dateOfBirth}
          onChange={handleChange}
          required
        />

        <br />

        <label>NIC Number :</label>
        <input
          type="text"
          name="nicNumber"
          value={customerData.nicNumber}
          onChange={handleChange}
          required
        />

        <br />

        <label>Mobile Numbers (comma-separated) :</label>
        <input
          type="text"
          name="mobileNumbers"
          value={customerData.mobileNumbers.join(',')}
          onChange={handleMobileNumbersChange}
          required
        />

        <br />

        {customerData.familyMembers.map((familyMember, index) => (
          <div key={index}>
            <label>Family Member Name :</label>
            <input
              type="text"
              name="name"
              value={familyMember.name}
              onChange={(e) => handleFamilyMemberChange(index, e)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleFamilyMemberAdd}
          style={{
            backgroundColor: '#008B8B',
          }}
        >
          Add Family Member
        </button>
        <br />

        {customerData.addresses.map((address, index) => (
          <div key={index}>
            <label>Address Line 1 :</label>
            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={(e) => handleAddressChange(index, e)}
            />

            <br />

            <label>Address Line 2 :</label>
            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={(e) => handleAddressChange(index, e)}
            />

            <br />

            <label>City :</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={(e) => handleAddressChange(index, e)}
            />

            <br />

            <label>Country :</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={(e) => handleAddressChange(index, e)}
            />
          </div>
        ))}
        <button
          type="button"
          style={{
            backgroundColor: '#483D8B',
          }}
          onClick={handleAddressAdd}
        >
          Add Address
        </button>
        <br />

        <button
          type="submit"
          style={{
            backgroundColor: '#8B0000',
          }}
          className="submit-button"
        >
          <b>SUBMIT</b>
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
