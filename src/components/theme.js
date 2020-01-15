import React from "react"
import Image from "gatsby-image"

const Theme = ({ theme }) => {
  const { name, description, logo, images, repo, url, colors, editors } = theme

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <Image fluid={logo.fluid} alt={`${name} logo`} />
      {images.map((image, index) => (
        <img
          src={`/images/themes${image}`}
          alt={`${name} preview ${index}`}
          key={image}
        />
      ))}
      <a href={repo}>Repo</a>
      <a href={url}>Url</a>
      {/* {colors.map(color => (
        <p>{color.name}</p>
      ))}
      {editors.map(editor => (
        <p>{editor.name}</p>
      ))} */}
    </div>
  )
}

export default Theme
