import React from "react"
import Image from "gatsby-image"
// import { css } from "@emotion/core"

const Lightbox = ({ images }) => {
  if (!images.length) {
    return null
  }

  return (
    <>
      <Image fluid={images[0].fluid} />
      {/* {images.map((image, index) => (
        <Image
          fluid={image.fluid}
          alt={`${name} preview ${index}`}
          key={index}
        />
      ))} */}
    </>
  )
}

export default Lightbox
