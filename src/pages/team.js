import React from "react"

export default function Team({ data }) {

    const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;

    return (
        <div>
            <h1>
                {`Title : ${frontmatter.title}`}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export const teamQuery = graphql`
    query teamDataQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/team.md/"}}) {
          edges {
            node {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
`
