import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends React.Component {
  state = {
    didViewCountUp: false
  };

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <section className="fun-facts-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-users"></i>
                </div>
                <h3>
                  <span className="count">
                    {/* <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        decimal=","
                        decimals={0}
                        end={this.state.didViewCountUp ? 1000000 : 0}
                        duration={3}
                      />
                    </VisibilitySensor> */}
                    1 Million +
                  </span>
                  {/* {" "}
                  <span>1M +</span> */}
                </h3>
                <p>Entitlements</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-badge"></i>
                  {/* <i className="icofont-certificate"></i> */}
                  {/* <i className="icofont-certificate"></i> */}
                  {/* <i className="icofont-bank-alt"></i> */}
                </div>
                <h3>
                  <span className="count">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <React.Fragment>
                        <CountUp
                          start={0}
                          decimal=","
                          decimals={0}
                          end={this.state.didViewCountUp ? 25 : 0}
                          duration={3}
                        />
                        <span>+</span>
                      </React.Fragment>
                    </VisibilitySensor>
                  </span>
                  {/* {" "}
                  <span>+</span> */}
                </h3>
                <p>Fortune 1000 customers</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-law-document"></i>
                  {/* <i className="icofont-law-order"></i> */}
                  {/* <i className="icofont-diamond"></i> */}
                </div>
                <h3>
                  <span className="count">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <React.Fragment>
                        <CountUp
                          start={0}
                          decimal=","
                          decimals={0}
                          end={this.state.didViewCountUp ? 10 : 0}
                          duration={3}
                        />{" "}
                        {/* <span>+</span> */}
                      </React.Fragment>
                    </VisibilitySensor>
                  </span>
                </h3>
                <p>Compliance standards</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon">
                  <i className="icofont-industries-5"></i>
                </div>
                <h3>
                  <span className="count">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        decimal=","
                        decimals={0}
                        end={this.state.didViewCountUp ? 9 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </span>
                </h3>
                <p>Industries</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="fun-facts-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-image">
                  <img
                    src={require("../../images/features-img2.png")}
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-inner-content">
                  <h3>Build Beautiful Interface Into Your Application</h3>
                  <p>
                    Funding freemium technology focus equity bootstrapping
                    usernce niche market. Seed round agile development growth
                    hacking retur investment alpha. Investor advisor marketing
                    pitch gen scrum project.
                  </p>
                  <p>
                    Responsive web design. Agile development innovator termsheet
                    is users interface pitch scrum project research &
                    development.
                  </p>
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
          </div>
        </div> */}
      </section>
    );
  }
}

export default Funfact;
