import data from "../data/projects";
import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesPerView = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className="space-y-12">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Projects
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and
            creative problem-solving
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto"></div>
        </div>

        {/* Projects Carousel */}
        <div
          className={`${inView ? "animate-fade-in delay-300" : "opacity-0"}`}
        >
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={getSlidesPerView()}
            spaceBetween={30}
            loop={data.length > 3}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="pb-12"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-600" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-secondary-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-secondary-600 mb-6">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
