// src/UpdateCustomer.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateCustomer.css';

const UpdateCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({
    name: '',
    dateOfBirth: '',
    nicNumber: '',
    mobileNumbers: [],
    familyMembers: [],
    addresses: [],
  });

  const [nicImage, setNicImage] = useState(null);

  useEffect(() => {
    // Fetch the specific customer based on the ID from the backend when the component mounts
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/customers/${id}`
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error);
      }
    };

    fetchCustomer();
  }, [id]); // Dependency on 'id' ensures the effect runs when the ID changes

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object for multipart/form-data
      const formData = new FormData();
      formData.append('nicImage', nicImage);
      formData.append('customer', JSON.stringify(customerData));

      // Send a PUT request to the backend API
      await axios.put(`http://localhost:8080/api/customers/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success (e.g., redirect, show success message)
      console.log(`Customer with ID ${id} updated successfully`);
      alert('Customer updated successfully');
      navigate('/getallcustomers');

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
      console.error(`Error updating customer with ID ${id}:`, error);
      alert('Customer update unsuccessful');
    }
  };

  return (
    <div className="add-customer-container">
      <h2>Update Customer</h2>
      <form onSubmit={handleUpdate} className="customer-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            required
          />
        </label>
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

        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={customerData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          NIC Number:
          <input
            type="text"
            name="nicNumber"
            value={customerData.nicNumber}
            onChange={handleChange}
            readOnly
          />
        </label>
        <br />

        <label>
          Mobile Numbers (comma-separated):
          <input
            type="text"
            name="mobileNumbers"
            value={customerData.mobileNumbers.join(',')}
            onChange={handleMobileNumbersChange}
            required
          />
        </label>
        <br />

        {customerData.familyMembers.map((familyMember, index) => (
          <div key={index}>
            <label>
              Family Member Name:
              <input
                type="text"
                name="name"
                value={familyMember.name}
                onChange={(e) => handleFamilyMemberChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          style={{
            backgroundColor: '#008B8B',
          }}
          onClick={handleFamilyMemberAdd}
        >
          Add Family Member
        </button>
        <br />

        {customerData.addresses.map((address, index) => (
          <div key={index}>
            <label>
              Address Line 1:
              <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={(e) => handleAddressChange(index, e)}
              />
            </label>
            <br />

            <label>
              Address Line 2:
              <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={(e) => handleAddressChange(index, e)}
              />
            </label>
            <br />

            <label>
              City:
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={(e) => handleAddressChange(index, e)}
              />
            </label>
            <br />

            <label>
              Country:
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={(e) => handleAddressChange(index, e)}
              />
            </label>
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
          className="submit-button"
          style={{
            backgroundColor: '#2E8B57',
          }}
        >
          Update Customer
        </button>
      </form>
    </div>
  );
};

export default UpdateCustomer;
