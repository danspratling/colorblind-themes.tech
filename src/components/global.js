import React from "react"
import { Global as EmotionGlobal, css } from "@emotion/core"
import theme from "../utils/theme"

const Global = () => (
  <EmotionGlobal
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        font-family: ${theme.fonts.body};
        // line-height: ${theme.lineHeights.body};
        letter-spacing: 0.5px;
        margin: 0;
        min-height: 100vh;
        color: ${theme.colors.text};
        background-color: ${theme.colors.background};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        // font-family: ${theme.fonts.heading};
        // font-weight: ${theme.fontWeights.heading};
        // line-height: ${theme.lineHeights.heading};
      }
      h1 {
        // font-size: ${theme.fontSizes[6]};
      }
      h2 {
        // font-size: ${theme.fontSizes[5]};
      }
      h3 {
        // font-size: ${theme.fontSizes[4]};
      }
      h4 {
        // font-size: ${theme.fontSizes[3]};
      }
      p {
        margin: 0.25em 0 1em;
      }
      ul[class],
      ol[class] {
        list-style: none;
      }
      img {
        max-width: 100%;
        display: block;
      }
      a {
        color: ${theme.colors.primary};
        box-shadow: none;
      }
      article > * + * {
        margin-top: 1em;
      }
      input,
      button,
      textarea,
      select {
        font: inherit;
      }
    `}
  />
)

export default Global
