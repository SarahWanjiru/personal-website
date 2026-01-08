import React from "react";
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
  return (
    <div className="h-full w-full bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-y-auto overflow-x-hidden" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <main className="max-w-4xl mx-auto px-2 sm:px-4" style={{ width: "100%" }}>
        <Home />
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