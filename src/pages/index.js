import { Link } from 'gatsby'
import React from 'react'

const RootIndex = ({ data }) => {

  if (!data.test) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}><div>some index page</div>
      {data.test.edges.map(({ node }) => <Link key={node.id} to={`/KEK/${node.slug}`} >to {node.title}</Link>)
      }

    </div >
  )
}

export default RootIndex


export const pageQuery = graphql`
query{
    test:  allContentfulTest {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}
`