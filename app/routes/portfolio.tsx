import type { MetaFunction } from "@remix-run/node";
import CaseStudy from "~/components/caseStudy";
import CaseStudyData from "~/data/caseStudy";

import { useState, useMemo, MouseEvent } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Saki Portfolio" },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
    { name: "description", content: "My Work" },
  ];
};

export const Portfolio = () => {
  const skills = [
    "Client Project",
    "Own Project",
    "React",
    "Gatsby",
    "Typescript",
    "Javascript",
    "NodeJS",
    "GraphQL",
    "Framer Motion",
    "Bootstrap",
    "Styled Components",
    "tachyons",
    "GSAP",
    "CMS",
    "Figma",
    "NextJS",
    "PostgreSQL",
    "Cypress",
  ];

  const [filterValues, setFilterValues] = useState<string[]>([]);

  const handleFilterChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget as HTMLButtonElement;
    if (filterValues.includes(value)) {
      // If value already exists, remove it from filterValues
      setFilterValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    } else {
      // If value doesn't exist, add it to filterValues
      setFilterValues((prevValues) => [...prevValues, value]);
    }
  };

  console.log(filterValues, "case study data");

  return (
    <>
      <h1 className="text-5xl md:text-9xl font-thin antialiased mt-10 md:m-10 pb-10 pt-10 pl-2">
        My Work
      </h1>
      <div className="flex justify-end m-3 md:m-10 pt-10 skills-container">
        {skills.map((skill) => (
          <button
            className={`custom-button ${
              filterValues.includes(skill) ? "selected" : ""
            }`}
            onClick={handleFilterChange}
            key={skill}
            value={skill}
          >
            <span>{skill}</span>
          </button>
        ))}
      </div>

      {filterValues.length === 0
        ? CaseStudyData.map((caseStudy, index) => (
            <CaseStudy
              number={index + 1}
              direction={index % 2 === 0 ? "right" : "left"}
              key={index}
              {...caseStudy}
            />
          ))
        : CaseStudyData.filter((caseStudy) =>
            caseStudy.tags.some((tag) => filterValues.includes(tag))
          ).map((caseStudy, index) => (
            <CaseStudy
              number={index + 1}
              direction={index % 2 === 0 ? "right" : "left"}
              key={index}
              {...caseStudy}
            />
          ))}

      <aside className="justify-around">
        <div className="about-blurb font-thin">
          <h3 id="about" className="mb-4 uppercase">
            about
          </h3>
          <p className="mb-2">
            I'm a self taught full stack developer, using online courses such as
            David Malan's CS50 and a free London based coding bootcamp,
            Founder's & Coders to teach myself how to code. I am adept at using
            React based frameworks such as Gatsby and Remix.
          </p>
          <p className="mb-2">
            After my bootcamp I worked at Ori in London learning Docker,
            Kubernetes and Golang. Since then, I've taken a break to have a
            daughter and I've been working freelance since 2022.
          </p>
          <p className="mb-2">
            Prior to coding, I worked in various administrative & research roles
            in East Asia and in British Parliament.
          </p>
          <p>I speak English, Japanese, Chinese & Dutch.</p>
        </div>
        <div className="contact-blurb font-thin ">
          <h3 id="contact" className="mb-4  uppercase">
            contact
          </h3>
          <p>saki@haginom.work</p>
          <p className="mb-2 italic">based in Amsterdam</p>
          <p className="mb-2">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/haginom/">@haginom</a>
          </p>
          <p className="mb-2">
            Github: <a href="https://github.com/haginom">@haginom</a>{" "}
          </p>
        </div>
      </aside>
      <div id="contact-about"></div>
    </>
  );
};

export default Portfolio;
