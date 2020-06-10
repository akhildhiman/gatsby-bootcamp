import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <p>I'm Rick, a full-stack developer living in Seattle, Washington.</p>
      <p>
        Need a developer? <a href="www.google.com"> Contact Me</a>
      </p>
    </Layout>
  )
}

export default IndexPage
