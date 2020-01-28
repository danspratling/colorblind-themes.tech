import React, { createContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const FilterContext = createContext(undefined)

const FilterProvider = ({ children }) => {
  const [currentEnvironment, setCurrentEnvironment] = useState("all")
  const [currentColorblindness, setCurrentColorblindness] = useState("all")

  const {
    allTheme,
    allEnvironment,
    allColorblindnessType,
  } = useStaticQuery(graphql`
    query FilterQuery {
      allTheme {
        nodes {
          name
        }
      }
      allEnvironment {
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
        environments: allEnvironment.nodes,
        currentEnvironment,
        setCurrentEnvironment,
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
