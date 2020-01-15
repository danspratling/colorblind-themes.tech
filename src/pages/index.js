import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Theme from "../components/theme"
import SEO from "../components/seo"

import themes from "../data/themes"

const IndexPage = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      {themes.map(theme => {
        const logo = edges.filter(
          ({ node }) => node.relativePath === theme.logo
        )[0]

        return (
          <Theme
            key={theme.name}
            theme={{
              name: theme.name,
              description: theme.description,
              logo: logo.node.childImageSharp,
              images: theme.images,
              repo: theme.repo,
              url: theme.url,
              colors: theme.colors,
              editors: theme.editors,
            }}
          />
        )
      })}
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
