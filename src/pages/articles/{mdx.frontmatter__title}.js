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
      }
    }
  }
`;

const Article = ({ data, children }) => {
  return (
    <Layout>
      <div className="prose m-auto">
        <h2 className="">{data.mdx.frontmatter.title}</h2>
        <p className="">{data.mdx.frontmatter.date}</p>
        {children}
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Article;
