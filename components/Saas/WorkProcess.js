import React from "react";

class WorkProcess extends React.Component {
  render() {
    return (
      <section className="saas-work-process ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="bar"></div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-work-process">
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: "20px" }}>
                    <div className="icon">
                      <i className="icofont-code-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ marginTop: "0px" }}>
                      Protect Against Hacking
                    </h3>
                    <p>
                      One of our customers through acquisitions ended up with
                      +80 Active Directories. These more than 80 Active
                      Directories with its orphaned user accounts were an open
                      invitation to hackers. SecurEnds CEM found 30% of accounts
                      as orphaned and successfully removed stale accounts from
                      the Active Directory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-work-process">
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: "20px" }}>
                    <div className="icon">
                      <i className="icofont-ui-add"></i>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ marginTop: "0px" }}>
                      Extend Existing IAM Investment
                    </h3>
                    <p>
                      One of our customers uses Okta. As with any IAM solution,
                      Okta does not provide user entitlement reviews, access
                      certification, and attestation to meet identity governance
                      compliance requirements. Unlike other expensive IGA
                      products that overlap with IAM features, SecurEnds allowed
                      the customer to quickly extend it’s IAM solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-server"></i>
                                </div>
                                <h3>Lounch</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="icofont-check"></i>
                                </div>
                                <h3>Reporting</h3>
                                <p>Morbi pharetra sapien ut mattis.</p>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default WorkProcess;
