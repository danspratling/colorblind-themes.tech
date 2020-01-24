import React, { createContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const FilterContext = createContext(undefined)

const FilterProvider = ({ children }) => {
  const [currentEditor, setCurrentEditor] = useState("all")
  const [currentColorblindness, setCurrentColorblindness] = useState("all")

  const { allTheme, allEditor, allColorblindnessType } = useStaticQuery(graphql`
    query FilterQuery {
      allTheme {
        nodes {
          name
        }
      }
      allEditor {
        nodes {
          name
        }
      }
      allColorblindnessType {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <FilterContext.Provider
      value={{
        themes: allTheme.nodes,
        editors: allEditor.nodes,
        currentEditor,
        setCurrentEditor,
        colorblindnessTypes: allColorblindnessType.nodes,
        currentColorblindness,
        setCurrentColorblindness,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
export { FilterProvider }
