import React from "react";
import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center">
        <CodeIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          My Work
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          From side projects to enterprise grade, million dollar applications.
          I've seen it all!
        </p>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              className="p-4 md:w-1/2 w-full focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <BriefcaseIcon className="mx-auto text-center block w-8 text-gray-500 mb-4" />
                <p reclassName="leading-relaxed mb-6">{project.quote}</p>
                <br />
                <div>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {project.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {project.description}
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
