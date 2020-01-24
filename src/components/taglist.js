import React from "react"
import styled from "@emotion/styled"
import theme from "../utils/theme"

const TagList = ({ type, tags, currentTag, setCurrentTag, color }) => {
  return (
    <Tags>
      <Tag
        currentTag={"all" === currentTag}
        htmlFor={`filter-all-${type}`}
        // style={{
        //   background: color ? theme.colors[color] : theme.colors.primary,
        //   color: color === "primary" ? "white" : "black",
        // }}
        clickable
      >
        <input
          type="radio"
          name="tag"
          id={`filter-all-${type}`}
          value="all"
          checked={"all" === currentTag}
          onChange={e => setCurrentTag(e.currentTarget.value)}
        />
        All
        <TagCount>{tags.length}</TagCount>
      </Tag>
      {tags.map(tag => (
        <Tag
          key={tag.name}
          currentTag={tag.name === currentTag}
          htmlFor={`filter-${tag.name}`}
          // style={{
          //   background: color ? theme.colors[color] : theme.colors.primary,
          //   color: color === "primary" ? "white" : "black",
          // }}
          clickable
        >
          <input
            type="radio"
            name="tag"
            id={`filter-${tag.name}`}
            value={tag.name}
            checked={tag.name === currentTag}
            onChange={e => setCurrentTag(e.currentTarget.value)}
          />
          {tag.name}
          <TagCount>{tag.count}</TagCount>
        </Tag>
      ))}
    </Tags>
  )
}

const Tags = styled.ul`
  display: block;
  padding: 0;
  margin: 0 -3px 10px;
  text-align: start;
`

const Tag = styled.label`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 6px;
  margin: 0 5px 8px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 400;
  input {
    display: none;
  }
  background-color: ${theme.colors.primary};
  ${props =>
    props.currentTag &&
    `
    background-color: ${theme.colors.secondary};
    color: hsla(0, 100%, 0%, 0.8);
  `}
`

const TagCount = styled.span``

export default TagList
