import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Helmet from "react-helmet";

class FaqPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Penny Bank Plus Frequently Asked Questions"
          meta={[
            {
              name: "description",
              content:
                "Frequently asked questions and knowledgebase about the Penny Bank Plus mobile app.",
            },
            { name: "keywords", content: "site, web, app, mobile, knowledgebase, faq, questions" },
          ]}
        >
          <html lang="en" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pennybank.online/faq" />
          <meta
            property="og:title"
            content="Penny Bank Plus Frequently Asked Questions"
          />
          <meta
            property="og:description"
            content="Frequently asked questions and knowledgebase about the Penny Bank Plus mobile app."
          />
          <meta
            property="og:image"
            content="https://www.pennybank.online/static/portrait-confused-unaware-european-father-sitting-with-sons-table-b29bdcfe70073f42ce8bd2e24f48da07.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://pennybank.online/faq"
          />
          <meta
            property="twitter:title"
            content="Penny Bank Plus Frequently Asked Questions"
          />
          <meta
            property="twitter:description"
            content="Frequently asked questions and knowledgebase about the Penny Bank Plus mobile app."
          />
          <meta
            property="twitter:image"
            content="https://www.pennybank.online/static/portrait-confused-unaware-european-father-sitting-with-sons-table-b29bdcfe70073f42ce8bd2e24f48da07.jpg"
          />
        </Helmet>
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
                  Team Penny Bank is dedicated to hearing your feedback. Please
                  email us at support@pennybank.online for direct questions or @
                  us @pennybankapp on your social media platform of choice.
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
      </React.Fragment>
    );
  }
}

export default FaqPage;
