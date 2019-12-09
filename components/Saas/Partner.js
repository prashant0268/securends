import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
  ],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};

class Partner extends React.Component {
  state = { display: false };

  componentDidMount() {
    this.setState({ display: false }); // Set this to true when we get real images
  }
  render() {
    return (
      <div className="partner-area">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Integrations</h2>
              <div className="bar"></div>
              <p>We provide integrations to make your job easier</p>
            </div>

            <div className="integrations-image">
              <img
                width="60%"
                src={require("../../images/brands-new.png")}
                alt="img"
              />
            </div>
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-6.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("../../images/partner-7.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
