/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "coding setup";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Connect with me on Linkedin",
    description:
      "This is my Linkedin profile.",
    url: "https://www.linkedin.com/in/pratham-bohra/",
  },
  {
    title: "RoadMap of Web Development for Beginners",
    description:
      "This is what I followed to start my journey in web development.",
    url: "https://youtu.be/voXYG17rhQA?si=LauHF7xtD_CSxNdD",
  },
  {
    title: "My Resume",
    description:
      "Created on Overleaf using latex. Includes my projects and skills.",
    url: "https://docs.google.com/document/d/1VvzPi0xuoINVut-hGOwIm8wCp1Ht95cZFhGuL_qtl24/edit?tab=t.0",
  },
  {
    title: "My GitHub",
    description:
      "My GitHub profile consists of 10 repositories including this portfolio site.",
    url: "https://github.com/Pratham-Bohra",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
