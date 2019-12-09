import React from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

class Banner extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner saas-home">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content pl-4">
                      <h1>
                        Want to better manage your user access and permissions?
                      </h1>
                      <p>
                        Learn more about our security products and solutions to
                        help your organization be one step ahead.
                      </p>
                      <Link href="#">
                        <a className="btn btn-primary">Demo</a>
                      </Link>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-12"
                    style={{
                      fontSize: "85px",
                      textAlign: "center",
                      color: "whitesmoke"
                    }}
                  >
                    <div
                      class="icons-container"
                      style={{
                        width: "300px",
                        margin: "0 auto",
                        color: "lightgrey"
                      }}
                    >
                      <i
                        class="icofont-finger-print"
                        style={{
                          border: "4px solid whitesmoke",
                          borderRadius: "50%",
                          padding: "20px"
                        }}
                      ></i>
                      <i
                        class="icofont-teacher"
                        style={{
                          left: "-20px",
                          top: "-70px",
                          fontSize: "59px"
                        }}
                      ></i>
                      <i
                        class="icofont-teacher"
                        style={{ bottom: "-40px", right: "-30px" }}
                      ></i>
                      <i
                        class="icofont-teacher"
                        style={{
                          left: "13px",
                          bottom: "-86px",
                          fontSize: "24px"
                        }}
                      ></i>
                      <i
                        class="icofont-teacher"
                        style={{ top: "-40px", fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                  {/* <div
                    className="col-lg-6 col-md-12"
                    style={{
                      fontSize: "250px",
                      textAlign: "center",
                      color: "whitesmoke"
                    }}
                  >
                    <div className="icons-container">
                      <i className="icofont-finger-print"></i>
                      <i class="icofont-teacher"></i>
                      <i class="icofont-teacher"></i>
                      <i class="icofont-teacher"></i>
                      <i class="icofont-teacher"></i>
                      <i class="icofont-teacher"></i>
                      <i class="icofont-teacher"></i>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Banner;
