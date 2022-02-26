import React from "react";
import { TerminalIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { awards } from "../data";

export default function Awards() {
  return (
    <section id="awards">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Awards
        </h1>
        <div className="flex flex-wrap m-4">
          {awards.map((award) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p reclassName="leading-relaxed mb-6">{award.quote}</p>
                <br />
                <div className="inline-flex items-center">
                  <img
                    alt="award"
                    src={award.image}
                    className="flex-shrink-0 object-cover object-center"
                  />
                </div>
                <div>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {award.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {award.description}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
