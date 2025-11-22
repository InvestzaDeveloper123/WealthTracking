import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import slider1 from "../assets/Frame 2147223881.png";
import slider2 from "../assets/Frame 2147223884.png";
import slider3 from "../assets/Frame 2147223876.png";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const sections = slidesRef.current;
    const totalSlides = sections.length;

    // Create horizontal scroll effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSlides - 1),
        start: "top top",
        end: `+=${totalSlides * 1000}`,
      },
    });

    tl.to(sections, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const sections = [
    {
      title: "Identify all your investments across all platforms",
      text: "Know how your overall portfolio is performing. Let Investza experts analyse your investments and give you a deep dive insight on your portfolio performance.",
      img: slider1,
    },
    {
      title: "Know which funds to exit to maintain a healthy portfolio",
      text: "Intelligent Decisions help you avoid dents on your portfolio growth. Avoid the red flags in your portfolio today",
      img: slider2,
    },
    {
      title: "Get in touch with an Investza Expert via the App",
      text: "Make strategic moves to diversify and regulate your portfolio for maximum and optimal growth",
      img: slider3,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]"
        style={{
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Horizontal Scroll Wrapper */}
      <div className="flex h-full w-[300vw]">
        {sections.map((item, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className="w-screen h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-24 relative"
          >
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group w-[60%] max-w-[320px]">
                <img
                  src={item.img}
                  alt={`slide-${i}`}
                  className="rounded-3xl shadow-2xl transition-transform duration-1200 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 mt-10 md:mt-0 space-y-6 text-center md:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text- drop-shadow-lg">
                {item.title}
              </h2>

              <p className="text-lg leading-relaxed bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {item.text}
              </p>

              {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.text}
              </p> */}
              {/* <button className="gradient-button px-6 py-3 rounded-full text-white font-semibold cursor-pointer border-none">
                Review My Portfolio →
              </button> */}
              <button
                className="
  px-6 py-3 
  rounded-full 
  text-white 
  font-semibold 
  cursor-pointer 
  border-none 
  bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
  hover:opacity-90 
  transition
"
              >
                Review My Portfolio →
              </button>

              {/* <button className="relative px-7 py-3 mt-4 rounded-xl font-semibold text-white bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 shadow-lg shadow-purple-900/30 hover:shadow-pink-500/40 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  Review my portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
