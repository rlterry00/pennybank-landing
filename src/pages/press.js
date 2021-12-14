import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import { navigate } from "gatsby";
import Helmet from "react-helmet";

class Press extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Penny Bank Plus Press and News"
          meta={[
            {
              name: "description",
              content:
                "Articles and inquries for press, blog, and podcast coverage of Penny Bank Plus.",
            },
            {
              name: "keywords",
              content:
                "site, web, app, mobile, press, news, blog, podcast, story",
            },
          ]}
        >
          <html lang="en" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pennybank.online/press" />
          <meta property="og:title" content="Penny Bank Plus Press and News" />
          <meta
            property="og:description"
            content="Articles and inquries for press, blog, and podcast coverage of Penny Bank Plus."
          />
          <meta
            property="og:image"
            content="https://www.pennybank.online/static/video-camera-taking-live-video-streaming-people-working-background-6be0c05bf02b6edcc88d3e85234bc73a.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://pennybank.online/press"
          />
          <meta
            property="twitter:title"
            content="Penny Bank Plus Press and News"
          />
          <meta
            property="twitter:description"
            content="Articles and inquries for press, blog, and podcast coverage of Penny Bank Plus."
          />
          <meta
            property="twitter:image"
            content="https://www.pennybank.online/static/video-camera-taking-live-video-streaming-people-working-background-6be0c05bf02b6edcc88d3e85234bc73a.jpg"
          />
        </Helmet>
        <HeaderLite />

        {/* <header className="masthead"> */}
        <section className="press">
          <div className="cta-content">
            <div className="container">
              <h2>
                Press
                <br />
              </h2>
              {/* <Scroll type="id" element="download"> */}

              {/* </Scroll> */}
            </div>
          </div>
          <div className="overlay"></div>
        </section>
        {/* </header> */}

        <section id="intro">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-5 my-auto">
                <h1 className="mb-5">Helping Us Tell Our Story</h1>
                <p className="mb-5">
                  If you have made it to this page in the website you may have
                  heard enough about Penny Bank to spark interest in covering us
                  on your medium. We certainly hope our website has provided you
                  with plenty of information and resources to learn about our
                  mission. We are constantly releasing new updates and would
                  love to keep you in the loop!
                </p>
              </div>
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <img
                    src={require("../assets/images/video-camera-taking-live-video-streaming-people-working-background.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                    alt="Press"
                  />
                </div>
                <div className="badges"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-heading text-center" style={{ margin: 30 }}>
          <h2 style={{ color: "black" }}>Press Inquries</h2>

          <hr />
          <p className="text-muted">
            We would love to be featured on your medium. Please reach out to us
            at press@pennybank.online. Feel free to check out our press kit
            below.
          </p>
          <button
            type="button"
            class="btn btn-info"
            onClick={() =>
              navigate(
                "https://docs.google.com/document/d/1lt9LSksDzSCp5XbkrE9vmtpQ7rdV-FFEFFY4-Py3zsc/edit?usp=sharing"
              )
            }
          >
            Press Kit
          </button>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Press;
