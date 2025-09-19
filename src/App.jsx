import React, { useState, useEffect,lazy } from "react";
import Loader from "./Components/Loader";

// Lazy load components
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Services = lazy(() => import("./Components/Service"));
const Timeline = lazy(() => import("./Components/Timeline"));
const Projects = lazy(() => import("./Components/Projects"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const Contacts = lazy(() => import("./Components/Contacts"));
const Footer = lazy(() => import("./Components/Footer"));


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Wait for everything (images, fonts, etc.)
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#050816]">
      <Hero />
      <About />
      <Services />
      <Timeline />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
