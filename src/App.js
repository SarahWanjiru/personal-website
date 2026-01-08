import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scene3D from "./components/Scene3D";

// Toggle: 'true' for 3D office scene, 'false' for standard portfolio
const ENABLE_3D_MODE = true;

function App() {
  if (ENABLE_3D_MODE) {
    return <Scene3D />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
}

export default App;
