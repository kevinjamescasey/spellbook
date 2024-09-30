import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import slugify from "@sindresorhus/slugify";

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { originalPublishDate: DESC } }) {
      nodes {
        frontmatter {
          originalPublishDate
          title
        }
        id
        excerpt
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const articles = data.allMdx.nodes
    .map((node) => {
      const fm = node.frontmatter;
      if (fm.title) {
        return (
          <div>
            <article key={node.id} className="p-5">
              <h2 className="text-2xl">
                <Link to={`/articles/${slugify(fm.title)}`}>{fm.title}</Link>
              </h2>
              {fm.originalPublishDate && (
                <span className="py-2">
                  <span className="text-slate-500">Published On</span>{" "}
                  {node.frontmatter.originalPublishDate}
                </span>
              )}
              <p className="py-1">{node.excerpt}</p>
            </article>
          </div>
        );
      }
      return undefined;
    })
    .filter((a) => a);

  return (
    <Layout>
      <div className="md:columns-2 md:columns-3xl">{articles}</div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
