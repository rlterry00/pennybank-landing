import React, { Component } from "react"; // requires a loader
import HeaderLite from "../components/HeaderLite";
import Footer from "../components/Footer";
import Leaderboards from "../components/Leaderboards";
import Helmet from "react-helmet";
import "/src/assets/sass/leaderboards.scss";
import "/src/assets/sass/_global.scss"
import "/src/assets/sass/_mixins.scss";


class LeaderboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Penny Bank Plus Leaderboards"
          meta={[
            {
              name: "description",
              content:
                "Top rankings in Penny Bank Plus. Download in the App Store and Google Play to let your kids level up.",
            },
            {
              name: "keywords",
              content:
                "site, web, app, mobile, game, leaderboard, score, points, awards, achievements, badges",
            },
          ]}
        >
          <html lang="en" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://pennybank.online/leaderboards"
          />
          <meta property="og:title" content="Penny Bank Plus Leaderboards" />
          <meta
            property="og:description"
            content="Top rankings in Penny Bank Plus. Download in the App Store and Google Play to let your kids level up."
          />
          <meta
            property="og:image"
            content="https://www.pennybank.online/static/3Z_2104.w026.n002.307B.p1.307-02b169340a5b734acd548bee03ad1288.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://pennybank.online/leaderboards"
          />
          <meta
            property="twitter:title"
            content="Penny Bank Plus Leaderboards"
          />
          <meta
            property="twitter:description"
            content="Top rankings in Penny Bank Plus. Download in the App Store and Google Play to let your kids level up."
          />
          <meta
            property="twitter:image"
            content="https://www.pennybank.online/static/3Z_2104.w026.n002.307B.p1.307-02b169340a5b734acd548bee03ad1288.jpg"
          />
        </Helmet>
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

        <section id="intro">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-5 my-auto">
                <h1 className="mb-5">
                  What Fun Is Creating Habits If There Isn't Levels To It?{" "}
                </h1>
                <p className="mb-5">
                  We have gamified Penny Bank Plus so children can share their
                  achievements, badges and XP scores in the Penny Bank Universe
                  with their peers. What does XP stand for? It stands for
                  experience. Parents we know you are a great motivator but peer
                  influence hsd proven to be just as effective as they level up
                  with their friends. Penny Bank removes the bore out of chores
                  with our XP scores! #Bars
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
                    At Team Penny Bank we see everyone as one big family. As an
                    appreciation to our users we want to reward the top
                    performers in Penny Bank Plus. As a baseline Team Penny Bank
                    will reward the top XP earners with a $25 digital Amazon
                    gift card when we run contest (usually monthly). Limitations
                    do apply. Make sure to follow us on all social media
                    channels @pennybankapp as we post updates.
                  </p>
                </div>
                <div className="badges"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-heading text-center" style={{ margin: 30 }}>
          <img
            src={require("../assets/images/animation_500_kx4kum6r.gif")}
            className="img-fluid"
            alt="Trophy"
            style={{ height: 300, width: 300 }}
          />
          <h2 style={{ color: "black" }}>XP Leaderboards</h2>

          <hr />
          <p className="text-muted">
            How is XP scored? XP is based off completed chores. Each completed
            chore is worth 5 XP points. Each time your child offers to do a
            chore through chore offers and your accept it they get an additional
            5 XP points. The max daily XP points any child can aquire is 50.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: 20,
          }}
        >
          <p>
            <u>Rank</u>
          </p>
          <p>
            <u>Avatar</u>
          </p>
          <p>
            <u>Username</u>
          </p>
          <p>
            <u>XP Score</u>
          </p>
        </div>
        <Leaderboards />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LeaderboardPage;
