import themes from "./src/data/themes"
import colors from "./src/data/colors"
import environments from "./src/data/environments"

function sourceNodes({ actions, createNodeId, createContentDigest }) {
  themes
    .sort(() => Math.random() - 0.5)
    .forEach(theme => {
      const nodeMeta = {
        id: createNodeId(`theme-${theme.name}`),
        parent: null,
        children: [],
        internal: {
          type: `Theme`,
          mediaType: `text/html`,
          content: JSON.stringify(theme),
          contentDigest: createContentDigest(theme),
        },
      }

      actions.createNode({ ...theme, ...nodeMeta })
    })

  Object.keys(colors).forEach(key => {
    const nodeMeta = {
      id: createNodeId(`color-${colors[key].name}`),
      parent: null,
      children: [],
      internal: {
        type: `ColorblindnessType`,
        mediaType: `text/html`,
        content: JSON.stringify(colors[key]),
        contentDigest: createContentDigest(colors[key]),
      },
    }

    actions.createNode({ ...colors[key], ...nodeMeta })
  })

  Object.keys(environments)
    .sort(key => environments[key].name) //sort isn't working
    .forEach(key => {
      const nodeMeta = {
        id: createNodeId(`environment-${environments[key].name}`),
        parent: null,
        children: [],
        internal: {
          type: `Environment`,
          mediaType: `text/html`,
          content: JSON.stringify(environments[key]),
          contentDigest: createContentDigest(environments[key]),
        },
      }

      actions.createNode({ ...environments[key], ...nodeMeta })
    })
}

export { sourceNodes }
