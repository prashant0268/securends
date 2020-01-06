import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

class WhitePaper extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* Banner */}
        <section className="page-title-banner company-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>WhitePaper</h2>
                <br />
                <h5 style={{ color: "white" }}>
                  Supporting compliance with data protection regulations for
                  GDPR
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="overview-section ptb-80 bg-gray">
          <div className="container whitepaper-content">
            <p>
              SecurEnds and Deloitte have partnered to publish “Supporting
              Compliance with Data Protection Regulations”, a white paper on the
              SecurEnds Credential Entitlement Management (CEM) solution. Tippu
              Gagguturu, co-founder and CEO of SecurEnds worked with Dan Cimpean
              of Deloitte Belgium to write this publication in support of the
              SecurEnds Credential Entitlement Management (CEM) product for
              addressing user access reviews.
            </p>
            <br />
            <h6>Read the WhitePaper</h6>
            <br />
            <br />
            <p>
              <iframe
                src="http://stage.securends.com/wp-content/uploads/2019/11/Deloitte-SecurEnds-GDPR-Security-Data-Privacy-Whitepaper.pdf"
                width="100%"
                height="2000"
              >
                <br />
              </iframe>
            </p>
          </div>
        </section>
        {/* Page Code */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default WhitePaper;
