import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import './GetAllCustomers.css'; // Import a separate CSS file for styling

const GetAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/customers/${id}/update`);
  };

  const handleView = (id) => {
    navigate(`/customers/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/customers/${id}`);
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer.id !== id)
      );
      console.log(`Customer with id ${id} deleted successfully`);
      alert('Customer deleted successfully');
    } catch (error) {
      console.error(`Error deleting customer with id ${id}:`, error);
      alert('Customer deleted unsuccessfully');
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-heading">All Customers</h2>
      <Table
        style={{ backgroundColor: '#191970' }}
        striped
        bordered
        hover
        responsive
        className="custom-table"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>NIC Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.nicNumber}</td>
              <td className="custom-table-actions">
                <Button
                  variant="primary"
                  style={{ backgroundColor: '#2E8B57' }}
                  className="custom-button-primary"
                  onClick={() => handleUpdate(customer.id)}
                >
                  <FaEdit /> Update
                </Button>
                <Button
                  variant="info"
                  style={{ backgroundColor: '#483D8B' }}
                  className="custom-button-info"
                  onClick={() => handleView(customer.id)}
                >
                  <FaEye /> View
                </Button>
                <Button
                  variant="danger"
                  style={{ backgroundColor: '#7b0909' }}
                  className="custom-button-danger"
                  onClick={() => handleDelete(customer.id)}
                >
                  <FaTrash /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GetAllCustomers;
