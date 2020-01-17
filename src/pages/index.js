import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import EditorTheme from "../components/theme"
import SEO from "../components/seo"

import theme from "../utils/theme"
import editorThemes from "../data/themes"

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
                ...GatsbyImageSharpFluid_withWebp
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
      <EditorThemeWrapper>
        {editorThemes.map(editorTheme => {
          const logo = edges.filter(
            ({ node }) => node.relativePath === editorTheme.logo
          )[0]

          const images = edges.filter(({ node }) =>
            editorTheme.images.includes(node.relativePath)
          )

          const sortedImages = editorTheme.images
            .map(image => images.filter(i => i.node.relativePath === image))
            .flat()

          return (
            <EditorTheme
              key={editorTheme.name}
              theme={{
                name: editorTheme.name,
                description: editorTheme.description,
                logo: logo.node.childImageSharp,
                images: sortedImages.map(image => image.node.childImageSharp),
                repo: editorTheme.repo,
                url: editorTheme.url,
                colors: editorTheme.colors,
                editors: editorTheme.editors,
              }}
            />
          )
        })}
      </EditorThemeWrapper>
    </Layout>
  )
}

const EditorThemeWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`

export default IndexPage
