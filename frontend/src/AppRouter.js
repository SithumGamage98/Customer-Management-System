// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import GetAllCustomers from './components/GetAllCustomers';
import ViewCustomer from './components/ViewCustomer';
import Header from './components/Header';
import UpdateCustomer from './components/UpdateCustomer';
import BulkUploadComponent from './components/BulkUploadComponent';
import Footer from './components/Footer';
import GetAllCustomersClient from './components/GetAllCustomersClient';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/getallcustomers" element={<GetAllCustomers />} />
        <Route path="/customers/:id" element={<ViewCustomer />} />
        <Route path="/customers/:id/update" element={<UpdateCustomer />} />
        <Route path="/uploadbulk" element={<BulkUploadComponent />} />
        <Route
          path="/getallcustomersclient"
          element={<GetAllCustomersClient />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
