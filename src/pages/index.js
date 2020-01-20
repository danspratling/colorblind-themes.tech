import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import EditorTheme from "../components/theme"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    allTheme: { edges },
  } = useStaticQuery(graphql`
    query myQuery {
      allTheme {
        edges {
          node {
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
            editors {
              name
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
        {edges.map(editorTheme => {
          const { id, images } = editorTheme.node

          return (
            <EditorTheme
              key={id}
              theme={{
                ...editorTheme.node,
                preview: images[0].childImageSharp,
                images: images.map(image => image.childImageSharp.fluid.src),
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
