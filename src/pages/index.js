import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Axios from "axios";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Social from "../components/Social";
import Subscribe from "../components/Subscribe";
import FAQShort from "../components/FAQShort";

import apple from "../assets/images/app-store-badge.svg";
import google from "../assets/images/google-play-badge.svg";
import mockup from "../assets/images/IMG_3901.png";
import mockup1 from "../assets/images/IMG_4046.png";
import mockup2 from "../assets/images/IMG_4056.png";
import mockup3 from "../assets/images/IMG_4061.png";
import mockup4 from "../assets/images/IMG_4064.png";
import mockup5 from "../assets/images/IMG_4048.png";
import mockup6 from "../assets/images/IMG_4054.png";
import mockup7 from "../assets/images/IMG_4066.png";
import mockup8 from "../assets/images/IMG_4049.png";
import mockup9 from "../assets/images/IMG_4068.png";
import mockup10 from "../assets/images/IMG_4052.png";
import mockup11 from "../assets/images/IMG_4059.png";
import mockup12 from "../assets/images/IMG_4074.png";

class IndexPage extends Component {
  state = {
    xpData: {},
  };

  async componentDidMount() {
    Axios.get("https://api.pennybankapi.online/api/Children/topXpEarners/3")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header />

          {/* <header className="masthead"> */}
          <section className="cta">
            <div className="cta-content">
              <div className="container">
                <h2>
                  Good Habits Start Today
                  <br />
                  With Penny Bank
                </h2>
                {/* <Scroll type="id" element="download"> */}
                <a
                  className="badge-link"
                  href="https://apps.apple.com/us/app/penny-bank-plus/id1522754902"
                >
                  <img
                    src={apple}
                    alt="Apple"
                    style={{ height: 250, width: 250 }}
                  />
                </a>
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
                  <h1 className="mb-5">What is Penny Bank?</h1>
                  <p className="mb-5">
                    Penny Bank is a reward system in a mobile app designed to
                    teach your child good habits they will need to be successful
                    as an adult. Penny Bank allows you to credit and pay your
                    child with cash or free time for completing chores. Unlike
                    our competitors you can use Penny Bank whether you want to
                    pay your kids or not. In addition to the intuitive banking
                    system, Penny Bank also awards your child with experience
                    points and achievements. This gives a gaming feel that shows
                    their progression and makes daily habits fun. Our social
                    features allow your child to follow and share their
                    achievements with their friends. Along with the other
                    features, Penny Bank also provides a learning hub with fresh
                    resources for your child to learn.
                  </p>
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <img
                      src={require("../assets/images/african-family-sharing-there-privacy-data-by-using-digital-devices-phones-tablets.jpg")}
                      style={{ borderRadius: 10, marginBottom: 20 }}
                      className="image"
                    />
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
              <div className="section-heading text-center">
                <h2 style={{ color: "black" }}>Did you know?</h2>
                <img
                  src={require("../assets/images/animation_500_kwrvs0ng.gif")}
                  className="img-fluid"
                  alt="Dashboard"
                  style={{ height: 200, width: 200 }}
                />
                <p className="text-muted">
                  Real banks don't physically hold your money. Banks tend to
                  keep only enough cash on hand to meet their anticipated
                  transaction needs. The concept of "Penny Banking" is based off
                  an earned value that only needs to be available at the time of
                  withdrawal.
                </p>
                <hr />
              </div>
              <div className="row h-100">
                <div className="col-lg-5 my-auto">
                  <h1 className="mb-5">The Penny Bank Theory</h1>
                  <img
                    src={require("../assets/images/father-is-idol-each-child-little-daughter-hug-serious-father-small-girl-father-yellow-background-fathers-day-family-values-dad-we-will-never-be-apart.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <p className="mb-5">
                      If you were to ask Team Penny Bank a year ago what our
                      core mission was it would have been hands down financial
                      literacy. After feedback and much research in the Penny
                      Bank Labs we have found that there are already solutions
                      on the market that can help with this. Instead of being
                      another "pay your child with their own debit card" app we
                      found the problem we want to solve is with the concept of
                      habits. The "Penny" in Penny Bank actually stands for The
                      Compound Effect. We belive small consistent actions add up
                      to a big pay off over time. One of the biggest assets a
                      child has is their time. We built an intuive system to
                      manage and award free time in exchange for them handling
                      their responsibilities. Surprisingly kids are more
                      interested in things over money and this also includes
                      things they enjoy doing with their free time as well. Our
                      cash or time banking system credits them with those
                      rewards teaching a duality of financial literacy and time
                      management. It ultimately teaches your child good habits
                      today that will carry over in the real world tomorrow.
                    </p>
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-heading text-center">
            <h2 style={{ color: "black" }}>Featured On</h2>

            <p className="text-muted">
              Check out these outlets that allowed us to tell our story!
            </p>
            <hr />
            <div
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://roanoke.com/business/native-roanokers-launch-app-for-family-productivity/article_40804677-7717-5d91-9671-9bf895913f0d.html?fbclid=IwAR3oc8a86c3FWwNyLWMuVVALahf853W-Nxhpws_y6E6n_K1stP24xhKHLzs">
                <img
                  src={require("../assets/images/roanoketimes.png")}
                  className="img-fluid"
                  alt="Dashboard"
                  style={{ height: 50, width: 350 }}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=WYWGaNnU20U">
                <img
                  src={require("../assets/images/Real_Estate_DORU_editable-300x196.png")}
                  className="img-fluid"
                  alt="Dashboard"
                  style={{ height: 200, width: 300 }}
                />
              </a>
            </div>
          </div>
          <section></section>

          <section className="download bg-primary text-center" id="download">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h2 className="section-heading" style={{ color: "white" }}>
                    Developed By Real People and Parents
                  </h2>
                  <p style={{ color: "white" }}>
                    We would love to hear your feedback!
                  </p>

                  <div className="badges">
                    <img
                      src={require("../assets/images/animation_500_kw6k80pw.gif")}
                      className="lottie"
                      style={{ marginTop: -100, marginBottom: -100 }}
                    />
                    <img
                      src={require("../assets/images/IMG_3924.png")}
                      style={{ borderRadius: 10 }}
                      className="imageWhite"
                    />

                    {/* <a
                className="badge-link"
                href="https://play.google.com/store/apps/details?id=online.pennybank.pennybank"
              >
                <img src={google} alt="Google" />
              </a> */}
                    <Subscribe />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="features" id="features">
            <div className="container">
              <div className="section-heading text-center">
                <h2 style={{ color: "black" }}>Penny Bank Plus</h2>
                <h2 style={{ color: "black" }}>Features and Benefits</h2>
                <img
                  src={mockup}
                  className="img-fluid"
                  alt="Dashboard"
                  style={{ height: 400, width: 200 }}
                />
                <p className="text-muted">
                  As of now we have dropped Penny Bank in favor of Penny Bank
                  Plus. We want to maintain our integrity with your data by
                  providing you an ad-free experience. Penny Bank Plus comes
                  with a 30 day free trial and is on sale for $2.99/month
                  (normally $3.99).
                </p>
                <hr />
              </div>
              <Carousel
                showArrows={true}
                autoPlay={true}
                showStatus={true}
                infiniteLoop={true}
                swipeable={true}
                stopOnHover={false}
                emulateTouch={true}
                interval="10000"
                showThumbs={true}
              >
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup1}
                            className="img-fluid"
                            alt="Dashboard"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-wallet"></i>
                            <h3>The Ultimate Rewards System</h3>
                            <p className="text-muted">
                              You are the bank! Give your children a sense of
                              accomplishment with a visual wallet. You can
                              reward your child with cash or free time. You can
                              still use Penny Bank for chore delegation with out
                              being required to pay them. Penny bank notifies
                              and tracks when your child checks out their
                              dashboard so you can monitor their habit of
                              checking for tasks.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup12}
                            className="img-fluid"
                            alt="Transactions"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-wallet"></i>
                            <h3>Transactions</h3>
                            <p className="text-muted">
                              Penny bank gives your child a real banking
                              experience with transaction records. You and your
                              child can see a history of their earnings and
                              their net worth in a snap shot. You can also see
                              collectively what you owe within your family as
                              your Penny Bank grows.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup2}
                            className="img-fluid"
                            alt="Discovery Screen"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-trophy"></i>
                            <h3>Discovery/XP Points</h3>
                            <p className="text-muted">
                              Our Discovery tab allows kids to learn and connect
                              with their peers. We have our own reward system
                              based off of experience points and achievements.
                              We have made chores and responsibilities fun by
                              gamifying it. We have leaderboards and badges to
                              share with their friends in the Penny Bank
                              community.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup3}
                            className="img-fluid"
                            alt="Avatar Screen"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-user-astronaut"></i>
                            <h3>Avatar Personalities</h3>
                            <p className="text-muted">
                              We have added avatars and user names to represent
                              your child in the Penny Bank universe. We even
                              threw in a few zombies and princesses with
                              customizable colors for the background.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup4}
                            className="img-fluid"
                            alt="Saved Chores Screen"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-save"></i>
                            <h3>Saved Chores/Quick Buttons</h3>
                            <p className="text-muted">
                              We have made things easier and quicker with quick
                              buttons through out the app that make a task easy
                              to be done in a few taps. We also added the
                              ability to save chores so reassigning can be a
                              breeze.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup5}
                            className="img-fluid"
                            alt="Time Banking"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-user-clock"></i>
                            <h3>Free Time Banking</h3>
                            <p className="text-muted">
                              Penny bank introduces the concept of time banking.
                              Time is the only asset we all share no matter the
                              age. Distributing and withdrawing free time for
                              things your child is interested in will feel
                              seamless with our discipline and rewards system.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup6}
                            className="img-fluid"
                            alt="Debt Screen"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fab fa-creative-commons-nc"></i>
                            <h3>Debt Discipline</h3>
                            <p className="text-muted">
                              One unique feature is the ability to take away
                              cash or time from their wallet as a discipline. We
                              find this to be most useful with time because it
                              is the asset that kids are most disciplined and
                              rewarded for their actions for the things they
                              love to do. Accounts do have the ability to go
                              into the negative insinuating they will owe that
                              time back in completing chores before they can
                              start spending again.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup7}
                            className="img-fluid"
                            alt="Puncuality Screen"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-hourglass-half"></i>
                            <h3>Punctuality Score</h3>
                            <p className="text-muted">
                              In order to aid in teaching kids about time
                              management we show a visual chart of the
                              percentage of how often your child completes their
                              chores on time. This provides an incentive for
                              them not to let the things you assign expire.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup8}
                            className="img-fluid"
                            alt="Picture Verification"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-camera-retro"></i>
                            <h3>Picture Verification</h3>
                            <p className="text-muted">
                              You can request your child send a picture of their
                              work instead physcially having to check it before
                              approving or denying a responsibility.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup9}
                            className="img-fluid"
                            alt="Offers"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-handshake"></i>
                            <h3>Chore Offers</h3>
                            <p className="text-muted">
                              Penny bank gives kids the power of decision making
                              by giving them the ability to be proactive and
                              make an offer on how much they want to be paid for
                              a chore. You have to ability to accept or decline
                              as the parent. This feature helps kids to develop
                              a habit of providing value for value in return! It
                              works great as a trade off for free time!
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup10}
                            className="img-fluid"
                            alt="Withdraw Request"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-money-bill-wave"></i>
                            <h3>Withdrawal Requests</h3>
                            <p className="text-muted">
                              Manage how your child's requests for cash and free
                              time with withdrawal requests. This allows you to
                              manage how much cash or free time a child is able
                              to use for certain things to maintain a healthy
                              spending habits and time management.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 my-auto">
                    <div className="device-container">
                      {/* <div className="device-mockup iphone6_plus portrait white"> */}
                      <div className="device">
                        <div className="screen">
                          <img
                            src={mockup11}
                            className="img-fluid"
                            alt="Love Tap"
                          />
                        </div>
                        <div className="button"></div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row" style={{ margin: 5 }}>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i class="fas fa-heart"></i>
                            <h3>Love Tap</h3>
                            <p className="text-muted">
                              This is a fun feature that both parent and child
                              can send to each other as a friendly reminder that
                              there is something pending that needs attention.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
              <div className="section-heading text-center">
                <h2 style={{ color: "black" }}>Want to Learn More?</h2>
                <p className="text-muted">
                  Check out our frequently asked questions (FAQ)
                </p>
                <hr />
              </div>
              <div className="row">
                <div className="col-lg-5 my-auto">
                  <img
                    src={require("../assets/images/close-up-portrait-attractive-young-woman-isolated.jpg")}
                    style={{ borderRadius: 10, marginBottom: 20 }}
                    className="image"
                  />
                </div>
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <FAQShort />
                    <br />
                    <button
                      type="button"
                      class="btn btn-info"
                      onClick={() => console.log("clicked button")}
                    >
                      Learn More 
                    </button>
                  </div>
                  <div className="badges"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact bg-primary" id="contact">
            <div className="container">
              <h2 style={{ color: "white" }}>
                Where you can find Team Penny Bank
                <br></br>
                <i className="fas fa-heart"></i>
              </h2>
              <Social />
              {/* <div className='row'> */}
              {/* <div className='col-4'></div> */}
              <hr />
              <br></br>
              {/* <div className="contactForm"> */}
              <h3 style={{ color: "white" }}>
                <i className="fas fa-envelope"></i>
                <br></br>
                support@pennybank.online
              </h3>
              {/* <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/contact@pennybank.online"
            method="post"
          > */}
              {/* <div className="form-group">
              <fieldset id="fs-frm-inputs">
                <label for="full-name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  required=""
                  className="form-control"
                />
                <label for="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  required=""
                  className="form-control"
                />
                <label for="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  required=""
                  className="form-control"
                ></textarea>
                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Contact Form Submission"
                  className="form-control"
                />
              </fieldset>
              <br></br>
              <input
                type="submit"
                value="Submit"
                className="form-control btn btn-dark"
              />
            </div>
          </form> */}
              {/* </div> */}
              {/* <div className='col-4'></div> */}
              {/* </div> */}
            </div>
          </section>

          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default IndexPage;
