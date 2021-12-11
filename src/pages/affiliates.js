import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import Layout from "../components/Layout";
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

class Affiliates extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
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
                    As Penny Bank continues to grow as a resource hub for
                    parents we have decided to partner with other brands or organizations that
                    can offer value to our Penny Bank Plus users. Some of these
                    businesses are gracious enough to provide special offers and
                    discounts on their services and products exclusively to our
                    Penny Bank Plus users. You will be able to find coupon codes
                    to redeem with in the Penny Bank Plus mohile app. Check this
                    page often for an updated list of partners.
                  </p>
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <img
                      src={require("../assets/images/building-strong-team-wooden-blocks-with-people-icon-blue-background-human-resources-management-concept.jpg")}
                      style={{ borderRadius: 10, marginBottom: 20 }}
                      className="image"
                    />
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
              We are looking to partner with brands even if your business or organization is
              local. Please reach out to us at contact@pennybank.online with
              affiliates in the header title and we will follow up with you.
            </p>
          </div>

          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Affiliates;
