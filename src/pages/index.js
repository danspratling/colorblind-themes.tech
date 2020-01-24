import React, { useContext } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import FilterContext from "../context/FilterContext"

import Layout from "../components/layout"
import EditorTheme from "../components/theme"
import SEO from "../components/seo"

const IndexPage = () => {
  const { currentEditor, currentColorblindness } = useContext(FilterContext)

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
          editors {
            name
          }
        }
      }
    }
  `)

  // based on context we want to filter out the themes we don't need
  const themes = allTheme.nodes.filter(
    theme =>
      (currentEditor === "all" ||
        theme.editors.some(editor => editor.name === currentEditor)) &&
      (currentColorblindness === "all" ||
        theme.colors.some(type => type.name === currentColorblindness))
  )

  return (
    <Layout>
      <SEO title="Home" />
      <EditorThemeWrapper>
        {themes.map(editorTheme => {
          const { id, images } = editorTheme

          return (
            <EditorTheme
              key={id}
              theme={{
                ...editorTheme,
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
