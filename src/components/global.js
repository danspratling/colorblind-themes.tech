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
        font-weight: 300;
        line-height: 1.3;
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
        font-family: ${theme.fonts.heading};
        // font-weight: ${theme.fontWeights.heading};
        line-height: 1em;
        color: ${theme.colors.heading};
        margin: 0.5em 0 0.8em;
      }
      h1 {
        font-size: 2.5em;
      }
      h2 {
        font-size: 1.8em;
      }
      h3 {
        font-size: 1.4em;
      }
      h4 {
        font-size: 1.2em;
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
        transition: 0.2s ease;

        &:hover, &:active {
          color: ${theme.colors.text};
        }
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
