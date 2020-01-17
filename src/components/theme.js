import React from "react"
import styled from "@emotion/styled"

import Lightbox from "./lightbox"

import { external, github } from "../images/icons"

const Theme = ({ theme }) => {
  const { name, description, logo, images, repo, url, colors, editors } = theme

  return (
    <EditorTheme>
      <Lightbox images={images} />

      <EditorThemeContent>
        <p>{name}</p>
        <p>{description}</p>
        {/* <Image fluid={logo.fluid} alt={`${name} logo`} /> */}

        <ExternalLink href={repo}>
          <img src={github} alt={`Github repo for ${name}`} />
        </ExternalLink>

        {url ? (
          <ExternalLink href={url}>
            <img src={external} alt={``} />
          </ExternalLink>
        ) : null}
        {/* {colors.map(color => (
        <p>{color.name}</p>
      ))}
      {editors.map(editor => (
        <p>{editor.name}</p>
      ))} */}
      </EditorThemeContent>
    </EditorTheme>
  )
}

const EditorTheme = styled.div`
  display: grid;
  grid-template-rows: 300px auto auto;
  border: 1px solid #000000;
  border-radius: 8px;
`

const EditorThemeContent = styled.div`
  padding: 20px;
`

const ExternalLink = styled.a`
  display: inline-block;
`

export default Theme
