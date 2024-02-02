import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor="white" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Convergence Lanka (PVT)
              </h6>
              <p>
                Our services, strategy and products create efficient businesses,
                organizational growth and healthy long-term partnerships.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: '#191970' }}
              >
                Services
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Consulting
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Custom Software Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hardware Solutions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Integration Solutions
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: '#191970' }}
              >
                Quick links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Software
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hardware
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: '#191970' }}
              >
                Contact
              </h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                No 487/8,Pelawatta,Battaramulla,Sri Lanka
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@convergence.lk
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                +94 112 4086 85
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                +800-492-2560
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ color: '#F5FFFA', backgroundColor: '#191970' }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://sithumgamage98.github.io/sithum_web/"
        >
          SithumDev98.com😎
        </a>
      </div>
    </MDBFooter>
  );
}
