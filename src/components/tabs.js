import React from "react"
import styled from "@emotion/styled"

import theme from "../utils/theme"

const Tabs = ({ tabs, color }) => {
  return (
    <TabList>
      {tabs.map(({ name }) => (
        <Tab
          key={name}
          style={{
            background: color ? theme.colors[color] : theme.colors.primary,
            color: color === "primary" ? "white" : "black",
          }}
        >
          {name}
        </Tab>
      ))}
    </TabList>
  )
}

const TabList = styled.ul`
  display: block;
  padding: 0;
  margin: 0 -3px 10px;
  text-align: start;
`

const Tab = styled.li`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 6px;
  margin: 0 3px 6px;
  font-size: 0.8rem;
  letter-spacing: 1px;
`

export default Tabs
