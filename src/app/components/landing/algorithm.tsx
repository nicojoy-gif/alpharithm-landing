"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  { id: "market", title: "Market Prediction", subtitle: "Use AI insights for smarter business decisions and stay competitive.", buttonText: "Learn More", image: "/market.svg" },
  { id: "finance", title: "Finance", subtitle: "Our AI models analyze financial data for confident investments.", buttonText: "Get Started", image: "/finance.svg" },
  { id: "analytics", title: "Data Analytics", subtitle: "Transform data into insights with AI analytics that enhance decisions.", buttonText: "Explore", image: "/analytics.svg" },
  { id: "content", title: "Content Generation", subtitle: "Create quality content easily with AI that knows your brand and audience.", buttonText: "Try Now", image: "/content.svg" },
  { id: "support", title: "Customer Support", subtitle: "Use AI chatbots for instant, personalized customer support.", buttonText: "See", image: "/customer.svg" },
];

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6, root: containerRef.current, rootMargin: "0px" }
    );

    const sectionElements = document.querySelectorAll(".scroll-section");
    sectionElements.forEach((section) => observer.observe(section));

    return () => sectionElements.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const activeTab = document.getElementById(`tab-${activeSection}`);
    if (activeTab && tabsRef.current) {
      tabsRef.current.scrollTo({
        left: activeTab.offsetLeft - tabsRef.current.offsetWidth / 2 + activeTab.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-8 py-16">
      {/* Header */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
          AI Models Tailored for Your Business Needs
        </h1>
        <p className="text-base md:text-xl text-gray-600 mt-4">
          Leverage AI to automate, analyze, and optimize your workflows.
        </p>
      </div>

      {/* Scrollable Tabs */}
      <div ref={tabsRef} className="w-full max-w-4xl justify-between flex gap-3 overflow-x-auto scrollbar-hide mt-6 border border-gray-300 rounded-lg p-2">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            id={`tab-${section.id}`}
            onClick={() => {
              setActiveSection(section.id);
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }}
            className={`relative px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeSection === section.id ? "bg-[#03217F] text-white shadow-md" : "bg-white text-gray-700"
            }`}
            animate={{ scale: activeSection === section.id ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {section.title}
          </motion.button>
        ))}
      </div>

      {/* Scrollable Sections */}
      <div
        ref={containerRef}
        className="w-full max-w-6xl flex flex-col md:flex-row md:overflow-x-auto snap-x snap-mandatory mt-8 space-y-8 md:space-y-0 md:space-x-6 scrollbar-hide"
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            id={section.id}
            className="scroll-section flex flex-col md:flex-row items-center w-full md:min-w-[50vw] bg-gray-100 rounded-lg shadow-md  snap-center"
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: activeSection === section.id ? 1 : 0.3, scale: activeSection === section.id ? 1 : 0.85 }}
            transition={{ duration: 0.5 }}
          >
            {/* Text Content */}
            <div className="flex-1 p-6 text-center md:text-left">
              <h2 className="text-lg md:text-xl text-gray-600 font-semibold">{section.title}</h2>
              <p className="text-gray-900 text-lg md:text-xl mt-2 leading-snug">{section.subtitle}</p>
              <button className="mt-4 px-5 md:px-6 py-2 text-sm md:text-base bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
               Learn more
              </button>
            </div>

            {/* Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-[80%] md:w-[40%] mt-6  object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
