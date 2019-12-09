import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Feedback extends React.Component {
  state = { display: false };

  componentDidMount() {
    this.setState({ display: true });
  }
  render() {
    return (
      <section className="feedback-area ptb-80 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Customer Testimonials</h2>
            <div className="bar"></div>
            <p>
              See what our clients say about us on{" "}
              <span className="link" style={{ fontWeight: "bold" }}>
                GARTNER
              </span>{" "}
              and{" "}
              <span className="link" style={{ fontWeight: "bold" }}>
                CAPTERRA
              </span>
              .
            </p>
            {/* <p>
              See what our clients say about us on{" "}
              <img
                width="100px"
                src={require("../../images/Gartner_logo.png")}
              />
              and{" "}
              <img width="100px" src={require("../../images/capterra.png")} />
            </p> */}
          </div>

          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <div className="client-info">
                      <img
                        src={require("../../images/user-logo.png")}
                        alt="client"
                      />
                      <h3>Information Security</h3>
                      <span>Vice President</span>
                    </div>
                    <p>
                      SecurEnds was much less expensive than the other tools we
                      evaluated on the market and had all of the functionality
                      we were looking for. I’d recommend anyone in the market
                      for Credential Entitlement Management take a look at
                      SecurEnds.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <div className="client-info">
                      <img
                        src={require("../../images/user-logo.png")}
                        alt="client"
                      />
                      {/* <h3>Data Center Security & Compliance</h3> */}
                      <h3>Security & Compliance</h3>
                      <span>Senior Manager</span>
                    </div>
                    <p>
                      Their solution was easy to implement, the reviews were
                      very straight forward and it took very little time for the
                      managers complete their review. Once the solution was
                      implemented and the reviews complete, all the audit
                      findings disappeared.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <div className="client-info">
                      <img
                        src={require("../../images/user-logo.png")}
                        alt="client"
                      />
                      <h3>Steve M.</h3>
                      <span>Sr. Mgr Security & Compliance</span>
                    </div>
                    <p>
                      [With SecurEnds] we are finally able to meet our internal
                      audit and external audit objectives for conducting
                      Credential and Entitlement reviews.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-feedback">
                    <div className="client-info">
                      <img
                        src={require("../../images/user-logo.png")}
                        alt="client"
                      />
                      <h3>Mike B.</h3>
                      <span>COO</span>
                    </div>
                    <p>
                      The SecurEnds team provided us with outstanding support.
                      Once implemented we immediately found we were overspending
                      for some privileges and reclaimed seats that slipped
                      through the cracks. I can’t imagine how companies much
                      bigger than ours manage access control without a tool like
                      this.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-feedback">
                    <div className="client-info">
                      <img
                        src={require("../../images/user-logo.png")}
                        alt="client"
                      />
                      <h3>Abhi S.</h3>
                      <span>Vice President – CISO</span>
                    </div>
                    <p>
                      A great feature-rich, nifty application to flush orphan
                      accounts! Love the fact it has integrations with different
                      cloud service providers.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <svg
          className="svg-feedback-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z"
            fill="#2a5b9c"
          />
        </svg> */}
      </section>
    );
  }
}

export default Feedback;
