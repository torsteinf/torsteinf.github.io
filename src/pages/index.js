import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Prosjekter from '../components/prosjekt/index'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Prosjekter />
  </Layout>
)

export default IndexPage
