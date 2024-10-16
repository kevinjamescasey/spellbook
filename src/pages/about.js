import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import liLogo from "../images/LI-Logo.png";

const AboutPage = () => {

  return (
    <Layout>
      <article className="prose m-auto mt-4">
        <p>
          I have over 20 years of full stack software engineering experience over a broad range of technologies and use cases including:
          <ul>
            <li>applications on mainframe, desktop, web, cloud, and mobile</li>
            <li>writing production code in at least 10 different programming languages</li>
            <li>solving problems for Fortune 50 companies, startups, and quasi-governmental entities</li>
          </ul>
          I made this site to organize my guides, references, observations, musings,
          ramblings...
        </p>
        <p>
          See my
          <a href="https://kevinjamescasey.github.io/resume/">
            {" "}
            Buzzword Resume{" "}
          </a>
          to find out what tools I've been using.
        </p>
        <p>
          See the site directory on{" "}
          <a href="https://kevinjamescasey.github.io/">My GitHub User Site</a>{" "}
          for a summary of my web sites.
        </p>
        <p>
          <a href="https://www.linkedin.com/in/kevin-casey-49a8b815/">
            <img src={liLogo} className="h-8" alt="LinkedIn"/>
          </a>
          <a
            href="https://docs.google.com/document/d/1xdMVyb7GYVHn4o8AEGNlpXkjpfCg3f6qCWuvhB1NOAg/export?format=pdf"
            download="KevinCasey_Resume.pdf"
          >
            Resume PDF
          </a>
        </p>
      </article>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
