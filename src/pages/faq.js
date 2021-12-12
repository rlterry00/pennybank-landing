import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import Layout from "../components/Layout";
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

class FaqPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <HeaderLite />

          {/* <header className="masthead"> */}
          <section className="faq">
            <div className="cta-content">
              <div className="container">
                <h2>
                  Frequently Asked Questions
                  <br />
                </h2>
                {/* <Scroll type="id" element="download"> */}

                {/* </Scroll> */}
              </div>
            </div>
            <div className="overlay"></div>
          </section>
          {/* </header> */}
          <div style={{ margin: 20 }}>
            <FAQ />
          </div>

          <section id="intro">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-5 my-auto">
                  <h1 className="mb-5">Still Not Finding What You Need?</h1>
                  <p className="mb-5">
                    Team Penny Bank is dedicated to hearing your feedback.
                    Please email us at support@pennybank.online for direct
                    questions or @ us @pennybankapp on your social media
                    platform of choice.
                  </p>
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <img
                      src={require("../assets/images/how-they-quickly-grew-up-portrait-shocked-anxious-european-father-sitting-with-sons-holding-hands-face-dropping-jaw.jpg")}
                      style={{ borderRadius: 10, marginBottom: 20 }}
                      className="image"
                      alt="FAQ"
                    />
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default FaqPage;
