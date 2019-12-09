import React from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
// import SearchForm from "./SearchForm";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleDrawer = () => {
    this.setState(prevState => {
      return {
        drawer: !prevState.drawer
      };
    });
  };

  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;

    let layOutCls = "";
    //let logo = require("../../images/logo.png");

    let logo = require("../../images/SecurEnds.png");
    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = require("../../images/logo2.png");
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <header id="header">
        <div className="notification">
          <div className="title">
            Visit us at booth 618, Gartner IAM Summit , Dec 10-12, Las Vegas
          </div>
        </div>

        <div id="navbar" className={`crake-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/#">
                <a className="navbar-brand">
                  <img src={logo} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ background: "#001b90 !important" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item">
                    <Link activeClassName="active" href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Products &nbsp;
                      <i className="icofont-rounded-down"></i>
                    </a>
                    <ul className="dropdown_menu">
                      <li>
                        <Link activeClassName="active" href="/product-1">
                          <a>User Access & Entitlement Review</a>
                        </Link>
                      </li>

                      <li>
                        <Link activeClassName="active" href="/product-2">
                          <a>Identity alerts & Intelligence</a>
                        </Link>
                      </li>

                      <li>
                        <Link activeClassName="active" href="/product-3">
                          <a>Cloud Identity & Access Management</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Solutions &nbsp;
                      <i className="icofont-rounded-down"></i>
                    </a>
                    <ul className="dropdown_menu">
                      <li>
                        <Link activeClassName="active" href="/solution-1">
                          <a>Protect against Hacking</a>
                        </Link>
                      </li>

                      <li>
                        <Link activeClassName="active" href="/solution-2">
                          <a>Extend existing IAM investment</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Company &nbsp;
                      <i className="icofont-rounded-down"></i>
                    </a>
                    <ul className="dropdown_menu">
                      <li>
                        <Link activeClassName="active" href="/about-us">
                          <a>About Us</a>
                        </Link>
                      </li>

                      <li>
                        <Link activeClassName="active" href="/whitepaper">
                          <a>Whitepaper</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/case-studies">
                          <a>Case Studies</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/request-a-demo">
                          <a>Request a Demo</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/webinar">
                          <a>Webinar</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/events">
                          <a>Events</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/partners">
                          <a>Partners</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/blog">
                          <a>Blog</a>
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" href="/contact-us">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Success Stories &nbsp;
                      <i className="icofont-rounded-down"></i>
                    </a>
                    <ul className="dropdown_menu">
                      <li>
                        <Link activeClassName="active" href="/success-story-1">
                          <a>SITA</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mr-auto others-option">
                <Link href="#">
                  <a className="btn-sm btn-primary">Demo</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
