import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        originalPublishDate(formatString: "MMMM D, YYYY")
        lastUpdate(formatString: "MMMM D, YYYY")
        images {
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const Article = ({ data, children }) => {

  // This is slighty better than inline markdown images like this
  // ![Container Tech Diagram](./containersThreeWaysOnOneMachine.jpg)
  const images = data.mdx.frontmatter.images?.map(i => <GatsbyImage image={getImage(i)} objectFit="contain" alt={i.base}/>)

  const components = {ImgCount: () => images.length}

  if(images){
    for(const [i,image] of images.entries()){
      components[`Image${i}`] = () => image
    }
  }


  //MDXProvider is only needed if components need to be passsed in
  return (
    <Layout>
      <div className="prose mx-5 sm:mx-20 xl:mx-40 max-w-full">
        <h2 className="">{data.mdx.frontmatter.title}</h2>
        <p className="">
          first published on {data.mdx.frontmatter.originalPublishDate}; last
          published on {data.mdx.frontmatter.lastUpdate}
        </p>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Article;
