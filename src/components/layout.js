/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import theme from "../utils/theme"

import Global from "./global"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />
      <Github
        href="https://github.com/danspratling/colorblind-themes.tech"
        title="View the Github repo for this site "
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Github>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <Footer>
          <h4>
            <a href="https://github.com/danspratling/colorblind-themes.tech">
              Add your own themes directly in the repo{" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h4>
          <h4>
            <a href="https://twitter.com/dan_spratling">
              Follow me on twitter.
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </h4>
          <br />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    </>
  )
}

const Github = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: ${theme.breakpoints[2]}px;
  padding: 0px 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  padding: 30px 0;
  text-align: center;
`

export default Layout
