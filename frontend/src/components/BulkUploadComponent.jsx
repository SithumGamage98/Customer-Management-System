// src/BulkUploadComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './BulkUploadComponent.css'; // Import your CSS file

const BulkUploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:8080/api/customers/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Bulk upload successful', response.data);
        alert('Bulk uploaded successfully');
        // Handle success, update UI, etc.
      })
      .catch((error) => {
        console.error('Bulk upload error', error);
        alert('Bulk uploaded unsuccessfully');
        // Handle error, show error message, etc.
      });
  };

  return (
    <div className="bulk-upload-container">
      <h2>Bulk Upload</h2>
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: '#2E8B57',
        }}
        className="upload-button"
      >
        Upload Bulk Data
      </button>
    </div>
  );
};

export default BulkUploadComponent;
