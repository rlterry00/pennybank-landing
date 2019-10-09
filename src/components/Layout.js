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
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content:
                    "Putting the power of finance, responsibility and decision making in your child's hands!"
                },
                { name: "keywords", content: "site, web, app, mobile" }
              ]}
            >
              <html lang="en" />
              {/* <!-- Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://pennybank.online/" />
              <meta property="og:title" content="Penny Bank Online" />
              <meta
                property="og:description"
                content="Putting the power of finance, responsibility and decision making in your child's hands!"
              />
              <meta
                property="og:image"
                content="https://www.pennybank.online/static/pennymock-bedd543680f0474d06a8db38442ccb84.png"
              />
              {/* <!-- Twitter --> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content="https://pennybank.online/"
              />
              <meta property="twitter:title" content="Penny Bank Online" />
              <meta
                property="twitter:description"
                content="Putting the power of finance, responsibility and decision making in your child's hands!"
              />
              <meta
                property="twitter:image"
                content="https://www.pennybank.online/static/pennymock-bedd543680f0474d06a8db38442ccb84.png"
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
  activeLink: PropTypes.string
};

export default Layout;
