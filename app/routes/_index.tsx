import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useLocation } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "Saki Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const Index = () => {
  const { pathname } = useLocation();

  return (
    <div className="landing-page h-screen">
      <div>
        <div className="blurb-container">
          <p className="blurb font-thin antialiased mx-4 md:ml-10 	">
            Hi there! I'm a freelance full-stack web developer based in
            Amsterdam.
          </p>
          <p className="blurb font-thin antialiased mx-4 md:ml-10">
            Feel free to take a look around and see my latest{" "}
            <Link to="/portfolio">
              <span className="see-projects-text antialiased font-black">
                work
              </span>
              <span className="font-thin antialiased"> &#8594; .</span>
            </Link>
          </p>
          <p className="blurb font-thin antialiased mx-4 md:ml-10 ">
            I like working with modern React based frontend frameworks, such as
            Gatsby & Remix.
          </p>
          <p className="blurb font-thin antialiased mx-4 md:ml-10 ">
            If you have a project or want to chat you can{" "}
            <Link to="/portfolio#contact">
              {" "}
              <span className="see-projects-text  antialiased font-black">
                contact{" "}
              </span>
            </Link>
            me.
          </p>
          <p className="blurb font-thin antialiased mx-4 md:ml-10 ">
            You can also go to{" "}
            <Link to="/portfolio#about">
              {" "}
              <span className="see-projects-text  antialiased font-black">
                about{" "}
              </span>
            </Link>{" "}
            to find out a bit more about my journey .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
