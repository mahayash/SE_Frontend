import React from "react";
import Helmet from "react-helmet";

export default function About({ data }) {

    const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;

    return (
        <div>
            <Helmet title={`Title ${frontmatter.title}`} />
            <div>
                <h1>
                    {frontmatter.title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>  
    )
}

export const aboutQuery = graphql`
    query aboutDataQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about.md/"}}) {
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
`;



