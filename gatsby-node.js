const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const someItem = path.resolve('./src/templates/Item.js')
    resolve(
      graphql(
        `
          {
            allContentfulTest {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const items = result.data.allContentfulTest.edges
        items.forEach((element, index) => {
          createPage({
            path: `/KEK/${element.node.slug}/`,
            component: someItem,
            context: {
              slug: element.node.slug
            },
          })
        })
      })
    )
  })
}
