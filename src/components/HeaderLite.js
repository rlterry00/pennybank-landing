import React, { Component } from "react";
import Scroll from "./Scroll";
import icon48 from "../../public/icons/icon-48x48.png";
import { Link } from "gatsby";
export default class HeaderLite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: "",
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== "navbar-shrink") {
        this.setState({ visibilityClass: "navbar-shrink" });
      }
    } else {
      if (visibilityClass === "navbar-shrink") {
        this.setState({ visibilityClass: "" });
      }
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={icon48} alt="logo" />
            {/* {config.siteTitle}   */}
          </a>
          <button
            onClick={(_) => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? "" : "collapsed"
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.webapp.pennybank.online"
                >
                  Account
                </a>
              </li>

              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="FaqPage"
                >
                  <Link className="nav-link" href="/faq">
                    FAQ
                  </Link>
                </Scroll>
              </li>

              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="Team"
                >
                  <Link className="nav-link" href="/team">
                    Team Penny Bank
                  </Link>
                </Scroll>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.blog.pennybank.online"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="Press"
                >
                  <Link className="nav-link" href="/press">
                    Press
                  </Link>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="Affiliates"
                >
                  <Link className="nav-link" href="/affiliates">
                    Affiliates
                  </Link>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="LeaderboardPage"
                >
                  <Link className="nav-link" href="/leaderboards">
                    Leaderboards
                  </Link>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
