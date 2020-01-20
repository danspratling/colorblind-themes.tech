import React from "react"
import styled from "@emotion/styled"
import theme from "../utils/theme"

const Header = ({ siteTitle, editorThemes }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Heading>{siteTitle}</Heading>
      <SubHeading>
        A site to help you discover more editor themes which suit your
        colorblind needs.
      </SubHeading>
    </HeaderContainer>
  </HeaderWrapper>
)

const HeaderWrapper = styled.header`
  margin-bottom: 1.5rem;
`

const HeaderContainer = styled.div`
  max-width: ${theme.breakpoints[1]};
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
