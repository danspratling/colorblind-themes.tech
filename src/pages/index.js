import React from "react"

import Layout from "../components/layout"
import Theme from "../components/theme"
import SEO from "../components/seo"

import themes from "../data/themes"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {themes.map(theme => (
        <Theme key={theme.name} theme={theme} />
      ))}
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
