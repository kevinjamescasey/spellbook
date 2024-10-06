import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        originalPublishDate(formatString: "MMMM D, YYYY")
        lastUpdate(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

const Article = ({ data, children }) => {
  return (
    <Layout>
      <div className="prose mx-5 sm:mx-20 xl:mx-40 max-w-full">
        <h2 className="">{data.mdx.frontmatter.title}</h2>
        <p className="">
          first published on {data.mdx.frontmatter.originalPublishDate}; last
          published on {data.mdx.frontmatter.lastUpdate}
        </p>
        {children}
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Article;
