import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Navbar from "./components/navbar";
import Section4 from "./components/Section4";
import Section3 from "./components/Section3";
import Accordion from "./components/accordion";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
