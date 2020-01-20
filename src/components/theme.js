import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Lightbox from "./lightbox"
import Tags from "./tags"

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
      <Lightbox preview={preview} sources={images} />

      <EditorThemeContent>
        <h3>{name}</h3>
        <p>{description}</p>

        <Tags tags={colors} color="primary" />
        <Tags tags={editors} color="secondary" />

        <IconBox>
          {url ? (
            <ExternalLink href={url}>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
                aria-label={`External link to ${name}'s site`}
              />
            </ExternalLink>
          ) : null}

          <ExternalLink href={repo}>
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              aria-label={`Github repo for ${name}`}
            />
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
  grid-template-rows: 52px 80px minmax(40px, auto) minmax(40px, auto) 40px;
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
