import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import Helmet from "react-helmet";


class Affiliates extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Penny Bank Plus Affiliates"
          meta={[
            {
              name: "description",
              content:
                "Affilates who partner with Penny Bank Plus to provide exclusive value for active users.",
            },
            {
              name: "keywords",
              content:
                "site, web, app, mobile, affiliates, partnership, collaboration, business, coupon, discount",
            },
          ]}
        >
          <html lang="en" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://pennybank.online/affiliates"
          />
          <meta property="og:title" content="Penny Bank Plus Affiliates" />
          <meta
            property="og:description"
            content="Affilates who partner with Penny Bank Plus to provide exclusive value for active users."
          />
          <meta
            property="og:image"
            content="https://www.pennybank.online/static/building-strong-team-wooden-blocks-with-people-icon-blue-background-human-resources-management-concept-b111e2211efc74e64a47a2f588859341.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://pennybank.online/affiliates"
          />
          <meta property="twitter:title" content="Penny Bank Plus Affiliates" />
          <meta
            property="twitter:description"
            content="Affilates who partner with Penny Bank Plus to provide exclusive value for active users."
          />
          <meta
            property="twitter:image"
            content="https://www.pennybank.online/static/building-strong-team-wooden-blocks-with-people-icon-blue-background-human-resources-management-concept-b111e2211efc74e64a47a2f588859341.jpg"
          />
        </Helmet>
        <HeaderLite />

        {/* <header className="masthead"> */}
        <section className="affiliates">
          <div className="cta-content">
            <div className="container">
              <h2>
                Affiliates
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
                <h1 className="mb-5">
                  This is what the Plus stands for in Penny Bank
                </h1>
                <p className="mb-5">
                  As Penny Bank continues to grow as a resource hub for parents
                  we have decided to partner with other brands or organizations
                  that can offer value to our Penny Bank Plus users. Some of
                  these businesses are gracious enough to provide special offers
                  and discounts on their services and products exclusively to
                  our Penny Bank Plus users. You will be able to find coupon
                  codes to redeem with in the Penny Bank Plus mohile app. Check
                  this page often for an updated list of partners.
                </p>
              </div>
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <img
                    src={require("../assets/images/building-strong-team-wooden-blocks-with-people-icon-blue-background-human-resources-management-concept.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                    alt="Affiliates"
                  />
                </div>
                <div className="badges"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-heading text-center" style={{ margin: 30 }}>
          <h2 style={{ color: "black" }}>Partners and Brand Collaborators</h2>

          <hr />
        </div>
        <section id="intro">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-5 my-auto">
                <h1>Prosperity's Kitchen</h1>
                <h3>Charlotte, North Carolina</h3>
                <a
                  className="navbar-brand"
                  href="https://www.prosperityskitchenllc.com"
                >
                  <h5 className="mb-5">
                    https://www.prosperityskitchenllc.com
                  </h5>
                </a>
                <img
                  src={require("../assets/images/prosperitykitchen.jpg")}
                  style={{ borderRadius: 10, marginBottom: 20 }}
                  className="image"
                  alt="Affiliates"
                />
              </div>
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <p className="mb-5">
                    Their food prep services meet the needs of individuals as
                    well as families that are seeking healthy alternatives to
                    soul food, trainers and people in training prepping for
                    weight management. They meet the needs of those with events
                    needing to be catered, such as meetings, weddings, and all
                    special occasion events. Penny Bank recommends them for
                    catering for events for your kids as well. Penny Bank Plus
                    members get a free gift with their first order with coupon
                    code.
                    <br /> *Coupon code accessable in the Penny Bank Plus mobile
                    app.
                  </p>
                </div>
                <div className="badges"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-heading text-center" style={{ margin: 30 }}>
          <h2 style={{ color: "black" }}>Looking to Partner?</h2>

          <hr />
          <p className="text-muted">
            We are looking to partner with brands even if your business or
            organization is local. Please reach out to us at
            contact@pennybank.online with affiliates in the header title and we
            will follow up with you.
          </p>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Affiliates;
