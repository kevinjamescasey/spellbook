import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import liLogo from "../images/LI-Logo.png";

const AboutPage = () => {
  return (
    <Layout>
      <article className="prose m-auto mt-4">
        <p>
          I made this to organize my guides, references, observations, musings,
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
          to see the technology all of my sites
        </p>
        <p>
          <a href="https://www.linkedin.com/in/kevin-casey-49a8b815/">
            <img src={liLogo} className="h-8" />
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
