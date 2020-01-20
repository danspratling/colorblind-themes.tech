import React from "react"
import styled from "@emotion/styled"

import theme from "../utils/theme"

const Tags = ({ tags, color, currentTag, useCurrentTag }) => {
  return (
    <TagList>
      {tags.map(tag => (
        <Tag
          key={tag.name}
          style={{
            background: color ? theme.colors[color] : theme.colors.primary,
            color: color === "primary" ? "white" : "black",
          }}
        >
          {tag.name}
          {/* <TagCount>{tag.count}</TagCount> */}
        </Tag>
      ))}
    </TagList>
  )
}

const TagList = styled.ul`
  display: block;
  padding: 0;
  margin: 0 -3px 10px;
  text-align: start;
`

const Tag = styled.li`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 6px;
  margin: 0 3px 6px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 400;
`

const TagCount = styled.span``

export default Tags
