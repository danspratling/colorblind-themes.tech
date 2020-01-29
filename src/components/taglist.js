import React from "react"
import styled from "@emotion/styled"
import theme from "../utils/theme"

const Tags = ({ type, tags, currentTag, setCurrentTag, color }) => {
  return (
    <TagList>
      <TagListItem>
        <Tag
          currentTag={"all" === currentTag}
          htmlFor={`filter-all-${type}`}
          color={color ? theme.colors[color] : theme.colors.primary}
          clickable
        >
          <input
            type="radio"
            name={`tag-${type}`}
            id={`filter-all-${type}`}
            value="all"
            checked={"all" === currentTag}
            onChange={e => setCurrentTag(e.currentTarget.value)}
          />
          {`All ${type}`}
          {/* <TagCount>{tags.length}</TagCount> */}
        </Tag>
      </TagListItem>
      {tags.map(tag => (
        <TagListItem>
          <Tag
            key={tag.name}
            currentTag={tag.name === currentTag}
            htmlFor={`filter-${tag.name}`}
            color={color ? theme.colors[color] : theme.colors.primary}
            clickable
          >
            <input
              type="radio"
              name={`tag-${type}`}
              id={`filter-${tag.name}`}
              value={tag.name}
              checked={tag.name === currentTag}
              onChange={e => setCurrentTag(e.currentTarget.value)}
            />
            {tag.name}
            {/* <TagCount>{tag.count}</TagCount> */}
          </Tag>
        </TagListItem>
      ))}
    </TagList>
  )
}

const TagList = styled.ul`
  display: block;
  padding: 0;
  margin: 0 -3px 10px;
  text-align: center;
`

const TagListItem = styled.li`
  display: inline-block;
`

const Tag = styled.label`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 6px;
  margin: 0 5px 8px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 15px;
  background-color: #303331;
  border: 2px solid #303331;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;

  &:focus,
  &:focus-within {
    box-shadow: 0 0 4px 3px #cccccc;
  }

  input {
    opacity: 0;
    position: absolute;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    border-color: #303331;
    color: black;
  }

  &,
  &:hover,
  &:focus {
    ${props =>
      props.currentTag &&
      `
          background: ${props.color};
          border-color: ${props.color};
          color: ${props.color === theme.colors.primary ? "white" : "black"}
        `}
  }
`

// const TagCount = styled.span`
//   background-color: #303331;
//   color: white;
//   font-size: 12px;
//   padding: 2px 4px;
//   border-radius: 0.25em;
// `

export default Tags
