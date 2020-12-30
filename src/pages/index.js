import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Divider = styled.div`
   width: 100%;
   border: 1px dotted #555;
   opacity: 50%;
   margin: 10px 0px;
  }
`

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
        <h3>{data.site.siteMetadata.title}</h3>
        <Divider />
        <h1> test h1</h1>
        <h3> test h3</h3>
        <h5> test h5</h5>
        <p> test paragraph</p>
        <button> test button</button>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
