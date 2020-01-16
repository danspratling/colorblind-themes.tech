import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"

import { external, github } from "../images/icons"

const Theme = ({ theme }) => {
  const { name, description, logo, images, repo, url, colors, editors } = theme

  return (
    <div>
      {/* Lightbox carousel here. */}
      {/* {images.map((image, index) => (
        <Image
          fluid={image.fluid}
          alt={`${name} preview ${index}`}
          key={index}
        />
      ))} */}

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
    </div>
  )
}

const ExternalLink = styled.a`
  display: inline-block;
`

export default Theme
