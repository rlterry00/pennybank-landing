import React, { Component } from "react"; // requires a loader
import Layout from "../components/Layout";
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import Leaderboards from "../components/Leaderboards";

class LeaderboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <HeaderLite />

          {/* <header className="masthead"> */}
          <section className="leaderboards">
            <div className="cta-content">
              <div className="container">
                <h2>
                  Leaderboards
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
            <Leaderboards />
          </div>

          <section id="intro">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-5 my-auto">
                  <h1 className="mb-5">
                    What Fun Is Creating Habits If There Isn't Levels To It?{" "}
                  </h1>
                  <p className="mb-5">
                    We have gamified Penny Bank Plus so children can share their
                    achievements, badges and scores in the Penny Bank Universe
                    with their peers. Parents we know you are a great motivator
                    but peer influence is powerful as they level up with their
                    friends. Penny Bank removes the bore out of chores with our
                    XP scores! #Bars
                  </p>
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <img
                      src={require("../assets/images/45914.jpg")}
                      style={{ borderRadius: 10, marginBottom: 20 }}
                      className="image"
                      alt="Mountain Peak"
                    />
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
              <div className="row h-100">
                <div className="col-lg-5 my-auto">
                  <h1 className="mb-5">Founders Allowance</h1>
                  <img
                    src={require("../assets/images/45896.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                    alt="Video Game"
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <p className="mb-5">
                      At Team Penny Bank we see everyone as one big family. As
                      an appreciation to our users we want to reward the top
                      performers in Penny Bank Plus. As a baseline Team Penny
                      Bank will reward the top XP earners with a $25 digital
                      Amazon gift card when we run contest (usually monthly).
                      Limitations do apply. Make sure to follow us on all social
                      media channels @pennybankapp as we post updates.
                    </p>
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-heading text-center" style={{ margin: 30 }}>
            <h2 style={{ color: "black" }}>XP Leaderboards</h2>

            <hr />
            
          </div>

          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default LeaderboardPage;
