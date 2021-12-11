import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import Layout from "../components/Layout";
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import YouTube from "react-youtube";
import Avatar from "react-avatar";

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

          <div className="section-heading text-center" style={{ margin: 0 }}>
            <h2 style={{ color: "black", margin: 30 }}>Our Inner Child</h2>
            <hr />

            <p className="text-muted" style={{ margin: 30}}>
              To make Penny Bank great we had to tap into our inner child. We
              have decided instead of using professional headshots with our list
              of accolates we would like to share our favorite avatars from
              Penny Bank Plus.
            </p>
            <div
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={require("../assets/images/BoyAvatar_36.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#20B2AA", margin: 3 }}
                className="image"
              />
              <Avatar
                src={require("../assets/images/Ryan.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#20B2AA", margin: 3 }}
                className="image"
              />
              <Avatar
                src={require("../assets/images/Jamie.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#F8EB76", margin: 3 }}
                className="image"
              />
              <Avatar
                src={require("../assets/images/GirlAvatar_40.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#F8EB76", margin: 3 }}
                className="image"
              />
              <Avatar
                src={require("../assets/images/Julius.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#20B2AA", margin: 3 }}
                className="image"
              />
              <Avatar
                src={require("../assets/images/Nik.png")}
                round={10}
                size={175}
                style={{ backgroundColor: "#F8EB76", margin: 3 }}
                className="image"
              />
            </div>
          </div>

          <section id="intro">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-5 my-auto">
                  <h1 className="mb-5">Our Story and Our Mission</h1>
                  <img
                    src={require("../assets/images/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    {/* <LiteYouTubeEmbed
                      id="ZmAlpwgrbfE"
                      title="Penny Bank Keynote September 2020"
                      className="image"
                    /> */}
                    <p className="mb-5">
                      The idea of Penny Bank actually started as a technical
                      school project at a cohort at UNC Charlotte. We
                      technically were not Team Penny Bank then, we were "Group
                      Penny Bank" and had a stiff deadline to present the
                      concept before finals. Expanding on the concept, one of
                      the now founders took Penny Bank outside of the classroom
                      and was able to form Team Penny Bank. Team Penny Bank
                      joined forces with The Blacklight Group LLC to become one
                      of their pilot teams powering Penny Bank's initial
                      version. We have since grown with newer iterations of
                      Penny Bank into a diverse team of parents and technical
                      skillsets who share a passion for creating better
                      households for the future. One unique part of our story is
                      our team is majority remote and some of us meet for the
                      time in person at yearly team gatherings. Covid-19 allowed
                      us to be creative with non-traditional ways to continue to
                      build. Our mission is to meet kids where they are at. This
                      is a generation that is growing up on devices and we want
                      to be a staple in helping them learn positive habits that
                      can carry on into adulthood. As for parents, we want to
                      help aid by letting our systems help micromanage the small
                      stuff in the household.
                    </p>
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>

            <div className="section-heading text-center" style={{ margin: 0 }}>
              <h2 style={{ color: "black" }}>Keynote Story</h2>
              <hr />
              <YouTube
                videoId="ZmAlpwgrbfE"
                opts={{ width: "97%", height: "490" }}
              />
              <p className="text-muted">
                Penny Bank's story told at the initial launch Keynote.
              </p>
            </div>

            <div className="section-heading text-center" style={{ margin: 30}}>
              <h2 style={{ color: "black" }}>Looking to Join?</h2>

              <hr />
              <p className="text-muted">
                We are always looking for fresh talent to contribute to the
                growth of the team. If you are looking to get into cross
                platform web and mobile development, cloud infrastructure, UI/UX desgin or
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
