import React from "react"
import styled from "@emotion/styled"

import Lightbox from "./lightbox"
import Tabs from "./tabs"

import { external, github } from "../images/icons"

const Theme = ({ theme }) => {
  const {
    name,
    description,
    preview,
    images,
    repo,
    url,
    colors,
    editors,
  } = theme

  return (
    <EditorTheme>
      <Lightbox images={images} />

      <EditorThemeContent>
        <p>{name}</p>
        <p>{description}</p>

        <Tabs tabs={colors} color="primary" />
        <Tabs tabs={editors} color="secondary" />

        <IconBox>
          {url ? (
            <ExternalLink href={url}>
              <img src={external} alt={``} />
            </ExternalLink>
          ) : null}

          <ExternalLink href={repo}>
            <img src={github} alt={`Github repo for ${name}`} />
          </ExternalLink>
        </IconBox>
      </EditorThemeContent>
    </EditorTheme>
  )
}

const EditorTheme = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  border-radius: 0 0 8px 8px;
  box-shadow: 1px 2px 4px hsl(0, 0%, 0%, 20%);
  overflow: hidden;
`

const EditorThemeContent = styled.div`
  display: grid;
  grid-template-rows: 38px 80px minmax(40px, auto) minmax(40px, auto) 40px;
  padding: 15px 20px 15px;
`

const IconBox = styled.div`
  text-align: end;
  margin: auto 0;
`

const ExternalLink = styled.a`
  display: inline-block;
  margin: 0 5px;
`

export default Theme
