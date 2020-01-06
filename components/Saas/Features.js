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
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
