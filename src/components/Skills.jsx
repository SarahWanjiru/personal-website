import React from "react";
import Express from "../assets/Express.svg";
import Git from "../assets/Git.png";
import Html from "../assets/html5.png";
import Js from "../assets/Js.png";
import Mongo from "../assets/Mongo.svg";
import Node from "../assets/Nodejs.svg";
import ReactImg from "../assets/React.svg";
import Tailwind from "../assets/Tailwind.svg";
import Python from "../assets/Python.svg";
import Django from "../assets/Django.svg";
import Nextjs from "../assets/Nextjs.svg";
import Bootstrap from "../assets/Bootstrap.png";
import Github from "../assets/Github.svg";
import Typescript from "../assets/TypeScript.svg";
import Php from "../assets/php-logo.svg";
import Laravel from "../assets/laravel.png";
import Postgres from "../assets/postgresql.png";
import Mysql from "../assets/postgresql.png";
import Aws from "../assets/Amazon_Web_Services-Logo.svg";
import Docker from "../assets/docker.png";
import Kubernetes from "../assets/Kubernetes-Logo.svg";
import Terraform from "../assets/terraform.png";
import Jenkins from "../assets/Jenkins.png";
import Vscode from "../assets/vscode.png";
import Postman from "../assets/postman.png";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "React", icon: ReactImg },
        { name: "Next.js", icon: Nextjs },
        { name: "JavaScript", icon: Js },
        { name: "TypeScript", icon: Typescript },
        { name: "HTML5", icon: Html },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "Bootstrap", icon: Bootstrap },
      ],
    },
    {
      title: "Backend Development",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Node.js", icon: Node },
        { name: "Express.js", icon: Express },
        { name: "Python", icon: Python },
        { name: "Django", icon: Django },
        { name: "PHP", icon: Php },
        { name: "Laravel", icon: Laravel },
      ],
    },
    {
      title: "Databases",
      color: "from-success-500 to-success-600",
      skills: [
        { name: "MongoDB", icon: Mongo },
        { name: "PostgreSQL", icon: Postgres },
        { name: "MySQL", icon: Mysql },
      ],
    },
    {
      title: "Tools & Technologies",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: Github },
        { name: "AWS", icon: Aws },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "Terraform", icon: Terraform },
        { name: "Jenkins", icon: Jenkins },
        { name: "VS Code", icon: Vscode },
        { name: "Postman", icon: Postman },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Skills
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building secure, scalable, and efficient
            web and cloud-based applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div
                    className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}
                  ></div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative bg-secondary-50 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 border border-transparent hover:border-primary-200"
                    >
                      <div className="text-center space-y-3">
                        <div className="relative mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="font-semibold text-secondary-900 text-sm">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Always learning and expanding my skillset
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
