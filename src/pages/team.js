import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import Layout from "../components/Layout";
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <HeaderLite />

          {/* <header className="masthead"> */}
          <section className="team">
            <div className="cta-content">
              <div className="container">
                <h2>
                  Team Penny Bank
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
                  <h1 className="mb-5">Our Story and Our Mission</h1>
                  <p className="mb-5">
                    The idea of Penny Bank actually started as a technical
                    school project at a cohort at UNC Charlotte. We technically
                    were not Team Penny Bank then, we were "Group Penny Bank"
                    and had a stiff deadline to present the concept before
                    finals. Expanding on the concept, one of the now founders
                    took Penny Bank outside of the classroom and was able to
                    form Team Penny Bank. Team Penny Bank joined forces with The
                    Blacklight Group LLC to become one of their pilot teams
                    powering Penny Bank's initial version. We have since grown
                    with newer iterations of Penny Bank into a diverse team of
                    parents and technical skillsets who share a passion for
                    creating better households for the future. One unique part
                    of our story is our team is majority remote and some of us
                    meet for the time in person at yearly team gatherings.
                    Covid-19 allowed us to be creative with non-traditional ways
                    to continue to build. Our mission is to meet kids where they
                    are at. This is a generation that is growing up on devices
                    and we want to be a staple in helping them learn positive
                    habits that can carry on into adulthood. As for parents, we
                    want to help aid by letting our systems help micromanage the
                    small stuff in the household.
                  </p>
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <img
                      src={require("../assets/images/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office.jpg")}
                      style={{ borderRadius: 10, marginBottom: 20 }}
                      className="image"
                    />
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>
            <div className="section-heading text-center">
              <h2 style={{ color: "black" }}>Looking to Join?</h2>
              <hr />
              <p className="text-muted">
                We are always looking for fresh talent to contribute to the
                growth of the team. If you are looking to get into cross
                platform web and mobile development, cloud infrastructure, or
                creative marketing and sales. Please reach out to us at
                contact@pennybank.online with the header "Careers" and we will
                send you a list of available positions on the team.
              </p>
            </div>
          </section>

          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Team;
