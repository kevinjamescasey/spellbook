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

allImageSharp(
    filter: {fixed: {originalName: {eq: "android-chrome-512x512.png"}}}
  ) {
    nodes {
      gatsbyImageData
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
        <GatsbyImage image={getImage(data.allImageSharp.nodes[0])} alt="" className="size-10 z-20"/>
        <h2 className="">{data.mdx.frontmatter.title}</h2>
        <div className="grid md:grid-cols-2   justify-items-start">
          <div className="flex-none"><span className="italic">first published on</span> <span className="">{data.mdx.frontmatter.originalPublishDate}</span></div>
          <div className="flex-none"><span className="italic">last updated on</span> <span className="">{data.mdx.frontmatter.lastUpdate}</span></div>
</div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Article;
