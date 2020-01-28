import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Lightbox from "./lightbox"

import theme from "../utils/theme"

const Tags = ({ tags, color }) => {
  return (
    <TagList>
      {tags.map(tag => (
        <Tag
          key={tag.name}
          style={{
            background: color ? theme.colors[color] : theme.colors.primary,
            color: color === "primary" ? "white" : "black",
          }}
        >
          {tag.name}
        </Tag>
      ))}
    </TagList>
  )
}

const Theme = ({ theme }) => {
  const {
    name,
    description,
    preview,
    images,
    repo,
    url,
    colors,
    environments,
  } = theme

  return (
    <EnvTheme>
      <Lightbox preview={preview} sources={images} />

      <EnvThemeContent>
        <h3>{name}</h3>
        <p>{description}</p>

        <Tags tags={colors} color="secondary" />
        <Tags tags={environments} color="tertiary" />

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
      </EnvThemeContent>
    </EnvTheme>
  )
}

const EnvTheme = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  border-radius: 0 0 8px 8px;
  box-shadow: 1px 2px 4px hsl(0, 0%, 0%, 20%);
  overflow: hidden;
`

const EnvThemeContent = styled.div`
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

const TagList = styled.ul`
  display: block;
  padding: 0;
  margin: 0 -3px 10px;
  text-align: start;
`

const Tag = styled.li`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 6px;
  margin: 0 3px 6px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 400;
`

export default Theme
