import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="logo">
                    <img
                      src={require("../../images/SecurEnds.png")}
                      alt="SecurEnds"
                    />
                  </a>
                </Link>
                <h5>Head Quarter</h5>
                <p>
                  1 Glenlake Parkway, Ste. 525 Atlanta, GA 30328 Phone:
                  678.374.4243
                </p>

                <ul className="social-list">
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-youtube"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Useful Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/whitepaper">
                      <a>Whitepaper</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
                      <a>Partners</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Products</h3>

                <ul className="list">
                  <li>
                    <Link href="/product-1">
                      <a>User Access & Entitlement Review</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product-2">
                      <a>Identity alerts & Intelligence</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product-3">
                      <a>Cloud Identity & Access Management</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Solutions</h3>

                <ul className="list">
                  <li>
                    <Link href="/solution-1">
                      <a>Protect against Hacking</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solution-2">
                      <a>Extend existing IAM investment</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  © Copyright 2019 SecurEnds, LLC. All rights reserved
                  SecurEnds, LLC.
                </p>
                <p>
                  Other product and company names mentioned herein are the
                  property of their respective owners.
                </p>
              </div>

              <div className="col-lg-6 col-md-6" style={{ margin: "0 0 auto" }}>
                <ul>
                  <li>
                    <Link href="/terms-and-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
