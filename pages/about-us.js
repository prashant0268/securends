import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

class AboutUs extends Component {
  render() {
    const boardOfDirectors = [
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/06/tippu.jpg",
        name: "Tippu Gagguturu",
        description: `As a Co-Founder and CEO, Tippu Gagguturu is responsible for managing the company, formulating and executing long-term strategies. Prior to co-founding SecurEnds, Tippu worked for Allconnect as Chief Information Officer and successfully led the IT team with a focus on the infrastructure, security, solutions, software, and delivery of technology platform for the Allconnect marketplace. Prior to joining the Allconnect, Tippu worked for Equifax, Fujitsu Consulting, and Tata Consultancy Services. He also co-founded Sterizon, LLC, the developers of the wiZit – a wireless, handheld, Wi-Fi device that enables businesses to securely collect customer data and feedback. In the past, Tippu has served as a consultant for clients such as Verizon, MCI, Merrill Lynch, Prudential Financial, and Walmart. Tippu received his Master of Technology from the Indian Institute of Technology (IIT) in Kharagpur, India.`
      },
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/06/deven-reddy.jpg",
        name: "Deven Reddy",
        description: `Experienced Co-Founder & Chief Business Officer of Charter Global Inc. with a demonstrated history of working in the information technology and services industry. A strong business development professional skilled in Retail, Customer relationship management (CRM), Databases, Management, and Software as a Service (SaaS). Charter Global has been providing IT services, skilled technology resources, consulting, and business solutions to corporate customers since 1994. Our diverse, global team is experienced in leading technology platforms and actively involved in projects and clients.`
      }
    ];

    const leadershipTeam = [
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/06/tippu.jpg",
        name: "Tippu Gagguturu",
        title: "Chief Executive Officer",
        description: `Tippu is the Co-Founder & CEO of SecurEnds and a recognized
    technology thought leader serving on the board of companies.
    As a prolific product executive, Tippu co-founded Sterizon
    LLC, developer of the wiZit – a wireless, handheld, Wi-Fi
    device that enabled businesses to securely collect customer
    data and feedback. Prior to SecurEnds, Tippu was Chief
    Information Officer of Allconnect, which was acquired by Red
    Ventures in 2017. Earlier in his career, he served in various
    technology leadership roles at Equifax and Fujitsu.Tippu holds
    M.Tech from IIT Kharaghpur.`
      },
      {
        image: "http://stage.securends.com/wp-content/uploads/2019/06/ken.jpg",
        name: "Ken Reeves",
        title: "SVP of Client Services and Strategy",
        description: `Ken Reaves serves as Senior Vice President of Client Services and Strategy at SecurEnds. Executive Professional with 25+ years of diverse experience driving organizational growth and leading teams for mid-size to Global Fortune 500 organizations. Exceptional corporate executive experienced in formulating visionary initiatives by continuously working with stakeholders across the business units defining the ideal state of the client experience. A proven leader in effectively managing remote/offshore resources to improve overall operating cost while increasing the company’s revenue growth. Successful experience with monitoring business performance of the client experience by tracking client survey feedback’s, complaints and operating events in order to identify gaps between end state and current state.`
      },
      {
        image: "http://stage.securends.com/wp-content/uploads/2019/06/tom.jpg",
        name: "Tom Tavernetti",
        title: "Business Development Manager",
        description: `Tom Tavernetti works with IT and Executive leaders on Architecture and Program Management for implementation of Hadoop, (Cloudera, Hortonworks) and integration with statistical modeling software R, SAS, and SPSS. Data Scientists then utilize these tools to identify and verify the use case to achieve increases in profit/revenue or other objectives. Tier 1 Big Data Telecom Industry experience including Smart Phone and home video entertainment delivery and analysis to increase profits. Medical / Insurance solutions and Energy efficiency solution projects for Smart Homes projects also completed successfully. Experience interacting with Business leaders for various departments to achieve the business goals of the organization. 15 years of success selling ERP solutions and consulting services to Fortune 1000, SME and Government including solutions in the cloud.`
      },
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/09/Kelli-Profile-Picture-01.jpg",
        name: "Kelli Ottesen",
        title: "Manager of Marketing & Implementation",
        description: `Kelli joined the SecurEnds team as the Marketing and Implementation Manager after attending Georgia State University for her Ph.D. in Strategic Communication with an emphasis in analytics. She obtained her MA from Southern Utah University and BA from Brigham Young University. She has worked extensively in various communication capacities as a creative director of several well-regarded health campaigns, a communications professor, a television and radio host of numerous shows, a sports reporter, and a divorce court mediator. Kelli has designed various marketing campaigns for global corporations and nonprofit organizations yielding significant results. While Kelli has called Atlanta, Georgia home for the last 5 years, she was raised in Utah and loves being outside whenever possible. She enjoys backpacking, snowboarding, gardening, running, tennis, fishing, and wakeboarding. When Kelli isn’t working, she spends as much time as she can with her two young sons who constantly keep her on her toes.`
      },
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/09/Austin-Baker-Profile.jpg",
        name: "Austin Baker",
        title: "Manager of Sales",
        description: `Austin Baker leads our sales team to tailor and deploy the most effective solution for each of our clients. He challenges each member of our team to perpetually develop personally and professionally. With successful experience consulting with strategic executives to execute enterprise-level solutions, Austin cultivates an environment of integrity, professionalism, and gratitude. His other-oriented approach to the sales process helps drive our company forward. Austin graduated from Auburn University. While helping with the grand opening of a BBQ restaurant he met his wife of two years. They are soon to be proud parents of a daughter making her debut in December 2019.`
      },
      {
        image:
          "http://stage.securends.com/wp-content/uploads/2019/06/satish.jpg",
        name: "Satish Kumar Polepalli",
        title: "Software Engineering Head",
        description: `Satish Kumar Polepalli serves as Software Engineering Head at SecurEnds. He leads the product development, testing, deployment, and customer support teams. Experienced and exceptional technology leader excelled at team motivation and leadership. He brings successful experience meeting project objectives and goals from various clients and led project team members in complex projects. He has a Master’s in Computer Applications (MCA) and technical skills to bring software product goals into reality.`
      }
    ];
    return (
      <React.Fragment>
        <Navbar />
        {/* Banner */}
        <section className="page-title-banner company-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>About Us</h2>
                <br />
                <h5 style={{ color: "white" }}>
                  SecurEnds helps in reducing security risk and costs.
                </h5>
              </div>
            </div>
          </div>
        </section>
        {/* Page Code */}
        <section
          className="overview-section ptb-80 bg-gray"
          style={{ paddingBottom: "0px" }}
        >
          <div className="container about-us-content">
            <p>
              SecurEnds is an information security company headquartered in
              Atlanta, Georgia which helps to reduce security risk and costs by
              automating identity governance & access control.
            </p>
            <p>
              We offer a growing portfolio of security products including
              identity access management, identity provisioning/de-provisioning,
              employee boarding/off-boarding, identity governance, user
              access/entitlement reviews, security compliance, and audits. We
              focus on securing identities in the organization to protect
              potential breaches, internal security threats, and meet security
              compliance and audits.SecurEnds founders have extensive experience
              in information security and technology, creating complex
              technology platforms and solutions using cutting-edge
              technologies.
            </p>
            <p>
              SecurEnds provides user access governance and compliance products
              to manage user behavior, including the following:
            </p>
          </div>
          <br />
          <br />
          <div className="section-title">
            <h2>Leadership Team</h2>
            <div className="bar"></div>
          </div>
          <div>
            {leadershipTeam.map((l, indx) => {
              return (
                <div className={"team-container row shade-" + ((indx % 2) + 1)}>
                  <div className="user-picture col-sm-4">
                    <img src={l.image} />
                  </div>
                  <div className="user-info  col-sm-8">
                    <div className="name">{l.name}</div>
                    <div className="title">{l.title}</div>
                    <div className="details">{l.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <div className="section-title">
            <h2>Board of Directors</h2>
            <div className="bar"></div>
          </div>
          <div>
            {boardOfDirectors.map((l, indx) => {
              return (
                <div className={"team-container row shade-" + ((indx % 2) + 1)}>
                  <div className="user-picture col-sm-4">
                    <img src={l.image} />
                  </div>
                  <div className="user-info  col-sm-8">
                    <div className="name">{l.name}</div>
                    <div className="details">{l.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="feedback-area ptb-40 bg-gray">
          <div className="container">
            <div className="section-title" style={{ marginBottom: "0px" }}>
              <h2>Security Stack</h2>
              <br />
              <p>Ready to close the access gap in your security stack?</p>
              <br />
              <Link href="#">
                <a style={{ background: "orange" }} className="btn btn-primary">
                  Schedule a Demo
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
