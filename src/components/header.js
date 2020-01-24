import React, { useContext } from "react"
import styled from "@emotion/styled"
import theme from "../utils/theme"

import FilterContext from "../context/FilterContext"

import TagList from "./taglist"

const Header = ({ siteTitle, editorThemes }) => {
  const {
    editors,
    currentEditor,
    setCurrentEditor,
    colorblindnessTypes,
    currentColorblindness,
    setCurrentColorblindness,
  } = useContext(FilterContext)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Heading>{siteTitle}</Heading>
        <SubHeading>
          A site to help you discover more editor themes which suit your
          colorblind needs.
        </SubHeading>
        <TagList
          type="Editors"
          tags={editors}
          currentTag={currentEditor}
          setCurrentTag={setCurrentEditor}
          color="primary"
        />
        <TagList
          type="Colors"
          tags={colorblindnessTypes}
          currentTag={currentColorblindness}
          setCurrentTag={setCurrentColorblindness}
          color="secondary"
        />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  margin-bottom: 1.5rem;
`

const HeaderContainer = styled.div`
  max-width: ${theme.breakpoints[1]}px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`

const Heading = styled.h1`
  font-size: 52px;
  color: ${theme.colors.primary};
  text-align: center;
  margin: 0;
`

const SubHeading = styled.h2`
  font-size: 20px;
  text-align: center;
`

export default Header
