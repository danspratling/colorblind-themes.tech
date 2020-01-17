import React from "react"
import Image from "gatsby-image"
// import { css } from "@emotion/core"

const Lightbox = ({ images }) => {
  return (
    <>
      {/* {console.log(images)} */}
      {/* Lightbox carousel here. */}
      {images[0] ? (
        <Image
          fluid={images[0].fluid}
          style={{
            borderRadius: "8px 8px 0px 0px",
          }}
        />
      ) : null}
      {/* {images[0] ? <Image fixed={images[0].fixed} /> : null} */}
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
