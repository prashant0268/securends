import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Saas/Banner";
import Features from "../components/Saas/Features";
import Overview from "../components/Saas/Overview";
import Funfact from "../components/Saas/Funfact";
import WorkProcess from "../components/Saas/WorkProcess";
import Feedback from "../components/Saas/Feedback";
import Partner from "../components/Saas/Partner";

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Banner />

        <Overview />
        <Features />
        <WorkProcess />
        <Funfact />
        <Feedback />
        <Partner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
