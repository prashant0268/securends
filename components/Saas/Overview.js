import React from "react";
import Link from "next/link";

class Overview extends React.Component {
  render() {
    return (
      <section className="overview-section ptb-80 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
            <div className="bar"></div>
            {/* <p>
              Some tag line describing both the security Products. (Optional)
            </p> */}
          </div>
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img
                  src={require("../../images/user-access-reviews1.png")}
                  alt="image"
                />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <div className="icon">
                    <i className="icofont-key"></i>
                  </div>
                  <h3 style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    Credential Entitlement Management
                  </h3>
                </div>
                <p>
                  SecurEnds Credential Entitlement Management product automates
                  User Entitlement Reviews allowing you to get in control of
                  users’ entitlements across a wide range of systems while
                  enabling them to stay in control for access certification.
                </p>
                {/* <br />
                <h5>Salient Features</h5> */}
                <ul>
                  <li>
                    <i className="icofont-hand-drawn-right"></i> CSV File Upload
                  </li>
                  <li>
                    <i className="icofont-hand-drawn-right"></i> Connectors
                  </li>
                  <li>
                    <i className="icofont-hand-drawn-right"></i> Perform Access
                    Reviews
                  </li>
                  <li>
                    <i className="icofont-hand-drawn-right"></i> Access
                    Attestation and Audit Reports
                  </li>
                  <li>
                    <i className="icofont-hand-drawn-right"></i> SaaS
                  </li>
                </ul>
                <Link href="#">
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <div className="icon">
                    <i className="icofont-brainstorming"></i>
                  </div>
                  <h3 style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    Identity lifecycle management
                  </h3>
                </div>

                <p>
                  SecurEnds IGA product addresses automating access provisioning
                  and de-provisioning for employees, customers, and partners
                  onboarding and off-boarding. The product manages the identity
                  access management for Microsoft Dynamics, AX, Active
                  Directory, O365, SAP, Google Suite, and Databases.
                </p>
                <br />
                <br />
                <Link href="#">
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                <img
                  src={require("../../images/Identity-and-Intelligence-graphic.png")}
                  alt="image"
                />
              </div>
            </div>
          </div>
          {/* <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-1.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-power"></i>
                                </div>
                                <h3>Getting started page</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-anchor"></i>
                                </div>
                                <h3>Outdated comments toggling</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 app-fetured-item">
                                <div className="app-item item-one">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Community</h6>
                                </div>

                                <div className="app-item item-two">
                                    <i className="icofont-ebook"></i>
                                    <h6>Honest pricing</h6>
                                </div>

                                <div className="app-item item-three">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Management</h6>
                                </div>

                                <div className="app-item item-four">
                                    <i className="icofont-stock-mobile"></i>
                                    <h6>Mobile Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-3.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-users-social"></i>
                                </div>
                                <h3>Code review illustrations</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-ui-messaging"></i>
                                </div>
                                <h3>We provide proffesional staff</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-4.png')} alt="image" />
                            </div>
                        </div>
                    </div> */}
        </div>

        {/* <div className="shape7">
          <img src={require("../../images/shape7.png")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("../../images/shape3.png")} alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src={require("../../images/shape6.png")} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require("../../images/shape8.svg")} alt="shape" />
        </div>
        <div className="shape9">
          <img src={require("../../images/shape9.svg")} alt="shape" />
        </div>
        <div className="shape10">
          <img src={require("../../images/shape10.svg")} alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src={require("../../images/shape11.svg")} alt="shape" />
        </div> */}
      </section>
    );
  }
}

export default Overview;
