import React from "react"
// import Image from "../components/image"

const Theme = ({ theme }) => {
  const { name, description, logo, images, repo, url, colors, editors } = theme

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <img src={logo} />
      {images.map(image => (
        <img src={image} />
      ))}
      <a href={repo}>Repo</a>
      <a href={url}>Url</a>
      {colors.map(color => (
        <p>{color.name}</p>
      ))}
      {editors.map(editor => (
        <p>{editor.name}</p>
      ))}
    </div>
  )
}

export default Theme
