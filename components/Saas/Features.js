import React from "react";

class Features extends React.Component {
  render() {
    return (
      <section className="features-area saas-features ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Product Foundation</h2>
            <div className="bar"></div>
            {/* <p>Text to describe Product features. (Can be optional)</p> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <i className="icofont-bill"></i>
                </div>
                <h3>TCO</h3>
                <p>Reduce the total cost of ownership for the IGA solution</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <i className="icofont-molecule"></i>
                </div>
                <h3>Unify</h3>
                <p>Single view across all Connected and Disconnected Apps</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <i className="icofont-unique-idea"></i>
                  {/* <i className="icofont-readernaut"></i> */}
                  {/* <i className="icofont-brainstorming"></i> */}
                </div>
                <h3>AI / ML</h3>
                <p>Reduce time to value by adopting AI / ML</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <i className="icofont-pixels"></i>
                </div>
                <h3>Modular</h3>
                <p>Extend Existing IAM Investment without feature overlap</p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-responsive"></i>
                                </div>
                                <h3>Fast and optimized</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-hand-drag1"></i>
                                </div>
                                <h3>Drag and Drop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div> */}
          </div>
        </div>

        {/* <div className="features-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-image">
                  <img
                    src={require("../../images/features-img1.png")}
                    alt="image feature"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="features-inner-content">
                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-ui-call"></i>
                    </div>
                    <h3>Free Caliing Service</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-gift"></i>
                    </div>
                    <h3>Daily Free Gift</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-qr-code"></i>
                    </div>
                    <h3>QR Code Scaner</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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

export default Features;
