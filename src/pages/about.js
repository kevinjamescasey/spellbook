import * as React from "react";
import Layout from "../components/layout";
import HeadComponent from "../components/head";
import liLogo from "../images/LI-Logo.png";
import { Tooltip } from "@material-tailwind/react";

const AboutPage = () => {
  return (
    <Layout>
      <article className="prose m-auto mt-4">
        <div className="flex flex-col space-y-4">
          <div>
            <p>
              I have over 20 years of full stack software engineering experience
              over a broad range of technologies and use cases including:
            </p>
            <ul>
              <li>
                applications on mainframe, desktop, web, cloud, and mobile
              </li>
              <li>
                writing production code in at least 10 different programming
                languages
              </li>
              <li>
                solving problems for Fortune 50 companies, startups, and
                quasi-governmental entities
              </li>
            </ul>
            <p>
              I made this site to organize my guides, references, observations,
              musings, ramblings...
            </p>
          </div>
          <div>
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
              <a href="https://kevinjamescasey.github.io/">
                My GitHub User Site
              </a>{" "}
              for a summary of my web sites.
            </p>
          </div>
          <div>
            <p>
              Resume: &emsp;
              <a
                href="https://docs.google.com/document/d/1xdMVyb7GYVHn4o8AEGNlpXkjpfCg3f6qCWuvhB1NOAg/export?format=pdf"
                download="KevinCasey_Resume.pdf"
              >
                PDF Download
              </a>
              &emsp;
              <Tooltip
                content="download a copy at File > Download"
                placement="right"
              >
                <a
                  data-tooltip-target="tooltip-default"
                  href="https://docs.google.com/document/d/1xdMVyb7GYVHn4o8AEGNlpXkjpfCg3f6qCWuvhB1NOAg/edit?usp=sharing"
                >
                  Google Doc
                </a>
              </Tooltip>
            </p>
            <a href="https://www.linkedin.com/in/kevin-casey-49a8b815/">
              <img src={liLogo} className="h-8" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const Head = () => <HeadComponent title="About" />;

export default AboutPage;
