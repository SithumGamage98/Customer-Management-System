import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar
        expand="lg"
        style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink
                  aria-current="page"
                  href="/"
                  style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/addcustomer"
                  style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
                >
                  Add Customer
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/getallcustomersclient"
                  style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
                >
                  All Customers
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/uploadbulk"
                  style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
                >
                  Add Bulk Customer
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/getallcustomers"
                  style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
                >
                  Manage Customers
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/computer-monitor-keyboard-table-dark-room-with-black-background_1142-50858.jpg?t=st=1706804653~exp=1706808253~hmac=f585214b7500d043a28be977230c3a902961bc8aa9ceb435b894a8491a80af66&w=1060')",
          height: '500px',
        }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                <b>Convergence Lanka (PVT)</b>
              </h1>
              <h4 className="mb-3">
                <i>Technology for People, Smarter Solutions</i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
