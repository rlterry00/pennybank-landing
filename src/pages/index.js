import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import Social from "../components/Social";
import Subscribe from "../components/Subscribe";

import cSoon from "../assets/images/coming_soon.png";
import mockup from "../assets/images/homescreen.png";
import mockup1 from "../assets/images/distrubutetime.png";
import mockup2 from "../assets/images/responsibility.png";
import mockup3 from "../assets/images/goals.png";
import mockup4 from "../assets/images/offers.png";
import mockup5 from "../assets/images/withdrawal.png";
import mockup6 from "../assets/images/lovetap.png";
import mockup7 from "../assets/images/stats.png";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-5 my-auto">
            <img
              src={require("../assets/images/splash_reflective.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Productivity that inspires kids to be actively engaged in
                decision making!
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn bg-primary btn-xl">
                  Learn More!
                </a>
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              The Penny Bank App is Coming Soon!
            </h2>
            <p>
              Soon the Penny Bank app can help shape your kid's finance and
              habits!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={cSoon} alt="Coming Soon" />
              </a>
              {/* <a className="badge-link" href="/#">
                <img src={astore} alt="" />
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
          <h2>Penny Bank's Features</h2>
          <p className="text-muted">
            Put the power of decision making in your kid's hands!
          </p>
          <hr />
        </div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          stopOnHover={true}
          emulateTouch={true}
        >
          <div className="row">
            <div className="col-lg-4 my-auto">
              <div className="device-container">
                {/* <div className="device-mockup iphone6_plus portrait white"> */}
                <div className="device">
                  <div className="screen">
                    <img src={mockup} className="img-fluid" alt="Dashboard" />
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
                      <h3>Child Management</h3>
                      <p className="text-muted">
                        You are the bank! Give your children a sense of
                        accomplishment with a visual wallet. You can delegate
                        cash and time. Penny bank notifies and tracks when your
                        child checks out their dashboard so you can monitor
                        their habit of checking for tasks.
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
                      src={mockup1}
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
                      <h3>Time Banking</h3>
                      <p className="text-muted">
                        Penny bank introduces the concept of time banking. Time
                        is the only asset we all share no matter the age.
                        Distributing and withdrawing time for things your child
                        is interested in will feel seamless with our discipline
                        and rewards system.
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
                      alt="Responsibility"
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
                      <i class="fas fa-broom"></i>
                      <h3>Responsibility/</h3>
                      <h3>Contribution Chart</h3>
                      <p className="text-muted">
                        Posted note style cards help your family manage the
                        responsibilities due. The Contribution Chart fills in a
                        visualization block each day any child in the family
                        completes a responsibility.
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
                    <img src={mockup3} className="img-fluid" alt="Goals" />
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
                      <i class="fas fa-calendar"></i>
                      <h3>Goals</h3>
                      <p className="text-muted">
                        Posted note style cards help your family manage long
                        term goals for your children. This feature is great for
                        a goal being achieved over time such as school grades,
                        behavioral improvements, etc... The embedded calendar
                        gives a visualization of the start and endpoints of each
                        goal.
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
                    <img src={mockup4} className="img-fluid" alt="Offers" />
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
                      <h3>Offers</h3>
                      <p className="text-muted">
                        Penny bank gives kids the power of decision making by
                        giving them the ability to be proactive and make an
                        offer on how much they want to be paid for a
                        responsibility. You have to ability to accept or decline
                        as the parent. This feature helps kids to develop a
                        habit of providing value for value in return!
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
                      <h3>Withdrawal Request</h3>
                      <p className="text-muted">
                        Manage how your child requests for cash and time with
                        withdrawal requests. This allows you to manage how much
                        cash or time a child is able to use for certain things
                        to maintain a healthy wallet and spending habits.
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
                    <img src={mockup6} className="img-fluid" alt="Love Tap" />
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
                        This is a fun feature that both parent and child can
                        send to each other as a friendly reminder that there is
                        something pending that needs attention.
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
          <h2>Penny Bank Plus Features</h2>
          <p className="text-muted">
            All the core features of Penny Bank plus a growing list of exclusive
            features!
          </p>
          <hr />
        </div>
        <Carousel
          showArrows={true}
          autoPlay={false}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          stopOnHover={true}
          emulateTouch={true}
        >
          <div className="row">
            <div className="col-lg-4 my-auto">
              <div className="device-container">
                {/* <div className="device-mockup iphone6_plus portrait white"> */}
                <div className="device">
                  <div className="screen">
                    <img src={mockup7} className="img-fluid" alt="Stats" />
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
                      <i class="fas fa-chart-pie"></i>
                      <h3>Statistics Suite</h3>
                      <p className="text-muted">
                        Penny Bank Plus provides a more detailed statistics
                        suite of your child's habits and financial health. Out
                        the box you can see the punctuality of how often your
                        child completes tasks on time. You can see a pie chart
                        that shows as a whole what percentage each child
                        contributes to contributions in the house. You can also
                        see the wealth of each child in the house based on their
                        wallet holdings. Considering children can make offers,
                        some children can benefit from making their
                        contributions more valuable. This gives a good insight
                        of the spenders, the savers, and the negotiators!
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
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Good Habits.
            <br />
            Start Today.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#download" className="btn bg-primary btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          Follow the Movement!
          <br></br>
          <i className="fas fa-heart"></i>
        </h2>
        <Social />
        {/* <div className='row'> */}
        {/* <div className='col-4'></div> */}
        <hr />
        <br></br>
        <div className="contactForm">
          <h3>
            <i className="fas fa-phone"></i>
            <br></br>
            704-269-8727
          </h3>
          <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/contact@pennybank.online"
            method="post"
          >
            <div className="form-group">
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
          </form>
          {/* </div> */}
          {/* <div className='col-4'></div> */}
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
