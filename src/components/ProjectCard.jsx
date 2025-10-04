/**
 * ProjectCard Component - Individual project display card with hover effects
 * Shows project image, description, and links to live demo and source code
 */

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { image, title, description, liveProject, sourceCode } = project;

  return (
    <article className="group bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-secondary-100">
        <img
          src={image}
          alt={`${title} - Project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={liveProject}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 shadow-medium"
            aria-label={`View ${title} live project`}
          >
            <ExternalLink className="w-4 h-4 text-secondary-700" />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 shadow-medium"
            aria-label={`View ${title} source code`}
          >
            <Github className="w-4 h-4 text-secondary-700" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-heading font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-secondary-600 mt-2 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={liveProject}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-50 text-secondary-700 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 border-2 border-secondary-200 hover:border-primary-300"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
