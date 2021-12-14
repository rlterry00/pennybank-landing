import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../assets/sass/penny-bank.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content:
                    "Good habits start today. Penny Bank Plus the ultimate rewards system that teaches your child habit making, time management and financial literacy.",
                },
                { name: "keywords", content: "site, web, app, mobile" },
              ]}
            >
              <html lang="en" />
              {/* <!-- Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://pennybank.online/" />
              <meta property="og:title" content="Penny Bank Plus" />
              <meta
                property="og:description"
                content="Good habits start today. Penny Bank Plus the ultimate rewards system that teaches your child habit making, time management and financial literacy."
              />
              <meta
                property="og:image"
                content="https://www.pennybank.online/static/she-is-it-consultant-dad-parenthood-childhood-lovely-father-cute-kid-daughter-teaches-father-how-use-smartphone-child-dad-best-friends-having-fun-with-cheerful-father-3d0a42b9a36a7183deed5472f6ac826d.jpg"
              />
              {/* <!-- Twitter --> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content="https://pennybank.online/"
              />
              <meta property="twitter:title" content="Penny Bank Plus" />
              <meta
                property="twitter:description"
                content="Good habits start today. Penny Bank Plus the ultimate rewards system that teaches your child habit making, time management and financial literacy."
              />
              <meta
                property="twitter:image"
                content="https://www.pennybank.online/static/she-is-it-consultant-dad-parenthood-childhood-lovely-father-cute-kid-daughter-teaches-father-how-use-smartphone-child-dad-best-friends-having-fun-with-cheerful-father-3d0a42b9a36a7183deed5472f6ac826d.jpg"
              />
            </Helmet>
            <div className={"page-top"}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
