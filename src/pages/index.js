import React, { useContext } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import FilterContext from "../context/FilterContext"

import Layout from "../components/layout"
import EnvTheme from "../components/theme"
import SEO from "../components/seo"

const IndexPage = () => {
  const { currentEnvironment, currentColorblindness } = useContext(
    FilterContext
  )

  const { allTheme } = useStaticQuery(graphql`
    query myQuery {
      allTheme {
        nodes {
          id
          name
          description
          url
          repo
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          colors {
            name
          }
          environments {
            name
          }
        }
      }
    }
  `)

  // based on context we want to filter out the themes we don't need
  const themes = allTheme.nodes.filter(
    theme =>
      (currentEnvironment === "all" ||
        theme.environments.some(
          environment => environment.name === currentEnvironment
        )) &&
      (currentColorblindness === "all" ||
        theme.colors.some(type => type.name === currentColorblindness))
  )

  return (
    <Layout>
      <SEO title="Home" />
      <EnvThemeWrapper>
        {themes.map(theme => {
          const { id, images } = theme

          return (
            <EnvTheme
              key={id}
              theme={{
                ...theme,
                preview: images[0].childImageSharp,
                images: images.map(image => image.childImageSharp.fluid.src),
              }}
            />
          )
        })}
      </EnvThemeWrapper>
    </Layout>
  )
}

const EnvThemeWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`

export default IndexPage
