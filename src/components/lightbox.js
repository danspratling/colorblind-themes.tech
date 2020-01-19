import React, { useState } from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import FsLightbox from "fslightbox-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons"

const Lightbox = ({ preview, sources }) => {
  const [toggler, setToggler] = useState(false)

  if (!sources.length) {
    return null
  }

  return (
    <>
      <Button onClick={() => setToggler(!toggler)}>
        <Image
          fluid={preview.fluid}
          css={css`
            height: 100%;
          `}
        />
        <FontAwesomeIcon
          icon={faExpandArrowsAlt}
          size="3x"
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            color: white;
          `}
          aria-label=""
        />
      </Button>
      <FsLightbox toggler={toggler} sources={sources} />
    </>
  )
}

const Button = styled.button`
  appearance: none;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: 0;
  background-color: hsl(0, 0%, 0%);

  .gatsby-image-wrapper {
    transition: 0.2s;
  }

  &:hover,
  &:focus {
    .gatsby-image-wrapper {
      opacity: 0.4;
    }

    .svg-inline--fa {
      opacity: 0.925;
    }
  }
`

export default Lightbox
