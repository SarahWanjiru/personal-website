import React from "react";
import Hero from "../assets/Hero.svg";
import { ArrowDownToLine, Code, Database, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Cloud, ServerCog } from "lucide-react";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div
          className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-success-100 text-success-800 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-secondary-900 leading-tight">
              Experienced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Full Stack Developer
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-secondary-700 font-medium">
               AWS Cloud & DevOps Engineer
            </h2>
            <p className="text-base lg:text-lg text-primary-600 font-medium">
              Transforming businesses through scalable cloud-powered applications that solve real-life problems.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-secondary-600 leading-relaxed max-w-2xl">
           Software Developer and AWS-certified Cloud & DevOps Engineer with expertise in building secure, 
           scalable applications and cloud architectures. Skilled in modern frameworks, containerization with Docker/Kubernetes, 
           CI/CD pipelines, and database optimization, 
           I deliver efficient and innovative digital solutions that solve real-life problems.
          </p>

          {/* Tech Stack Highlights */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
              <Globe className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">
                Frontend
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
              <Database className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">
                Backend
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
              <Code className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">
                Full Stack
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
            <Cloud className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-secondary-700">
              Cloud Engineer
            </span>
            </div>
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
            <ServerCog className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-secondary-700">
              DevOps
            </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary-50 text-secondary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-secondary-200 hover:border-primary-300"
            >
              View Success Stories
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1gUmsF8cg-6ASnZ-yjUFuxLsjRvUEoxCa"
              className="inline-flex items-center justify-center gap-3 text-primary-600 hover:text-primary-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50"
              download
              aria-label="Download Sarah's Resume"
            >
              <ArrowDownToLine size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div
          className={`flex justify-center lg:justify-end ${
            inView ? "animate-fade-in delay-300" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-3xl scale-110"></div>
            <img
              src={Hero}
              alt="Sarah - Software Developer and AWS-certified Cloud & DevOps Engineer with expertise in building secure, 
           scalable applications and cloud architectures."
              className="relative w-full max-w-lg h-auto rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
