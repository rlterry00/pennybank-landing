import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Subscribe from '../components/Subscribe';

import cSoon from '../assets/images/coming_soon.png';
import mockup from '../assets/images/pennymock.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Teaching kids responsibility and goal orientation through
                finance!
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn bg-primary btn-xl">
                  Learn More!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto"></div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">The Mobile App is Coming Soon!</h2>
            <p>
              Soon your kid's financial future will be in the palm of their
              hands!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={cSoon} alt="" />
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
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              {/* <div className="device-mockup iphone6_plus portrait white"> */}
              <div className="device">
                <div className="screen">
                  <img src={mockup} className="img-fluid" alt="" />
                </div>
                <div className="button"></div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i class="fas fa-wallet"></i>
                    <h3>Mobile Wallet</h3>
                    <p className="text-muted">
                      The future of the debit card will be digital. Give your
                      kids the power to make their own purchases with their
                      mobile devices! Fully monitored by the parent.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i class="fas fa-broom"></i>
                    <h3>Responsibility</h3>
                    <p className="text-muted">
                      Assign responsibilies for your child whether it is in or
                      out of the household. Place monetary or non-monetary value
                      on your kid's ability to complete their responsibilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i class="fas fa-chart-line"></i>
                    <h3>Goals</h3>
                    <p className="text-muted">
                      Reward your kids for reaching long term goals (e.g.
                      academic or behavior) in addition to their responsibilies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fas fa-comments-dollar"></i>
                    <h3>Negotiation</h3>
                    <p className="text-muted">
                      Allow your kid to be pro active about their
                      responsibilies. Kids can make an offer and set their price
                      for your approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <a href="#contact" className="btn bg-primary btn-xl">
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
                  placeholder="First and Last"
                  required=""
                  className="form-control"
                />
                <label for="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="email@domain.tld"
                  required=""
                  className="form-control"
                />
                <label for="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
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
