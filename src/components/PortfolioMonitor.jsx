import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const PortfolioMonitor = () => {
  const containerRef = useRef(null);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element && containerRef.current) {
      const container = containerRef.current;
      const elementTop = element.offsetTop;
      container.scrollTo({
        top: elementTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-full w-full bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-y-auto overflow-x-hidden" 
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <Navbar onNavClick={handleNavClick} />
      <main className="max-w-4xl mx-auto px-2 sm:px-4" style={{ width: "100%" }}>
        <Home onNavClick={handleNavClick} />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioMonitor;