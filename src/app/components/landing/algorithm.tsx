"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "market",
    title: "Market Prediction",
    subtitle:
      "Use AI insights for smarter business decisions and stay competitive.",
    buttonText: "Learn More",
    image: "/market.svg",
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "Our AI models analyze financial data for confident investments.",
    buttonText: "Get Started",
    image: "/finance.svg",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle:
      "Transform data into insights with AI analytics that enhance decisions.",
    buttonText: "Explore",
    image: "/analytics.svg",
  },
  {
    id: "content",
    title: "Content Generation",
    subtitle:
      "Create quality content easily with AI that knows your brand and audience.",
    buttonText: "Try Now",
    image: "/content.svg",
  },
  {
    id: "support",
    title: "Customer Support",
    subtitle: "Use AI chatbots for instant, personalized customer support.",
    buttonText: "See",
    image: "/customer.svg",
  },
];

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const activeIndex = sections.findIndex((section) => section.id === activeSection);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 md:px-12 py-16">
      {/* Header Text */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-dark-400">
          AI Models Tailored for Your Business Needs
        </h1>
        <p className="text-base md:text-xl text-lightergray mt-4">
          Leverage the power of AI to automate, analyze, and optimize your workflows. 
          Our specialized models are designed to fit different business needs.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="w-full max-w-5xl mt-6 overflow-x-auto scrollbar-hide">
        <div className="relative flex justify-between border border-lightgrey rounded-lg p-2 overflow-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`relative px-4 py-2 text-sm md:text-base rounded-xl font-semibold tracking-wide transition-colors whitespace-nowrap
                ${activeSection === section.id ? "text-dark-300" : "text-gray-700"}`}
            >
              {section.title}
              {activeSection === section.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-dark-300 rounded-lg"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <div className="flex justify-center items-center mt-8 w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="flex flex-col md:flex-row items-center w-full bg-[#F6FAF3] rounded-lg shadow-lg p-6 md:p-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-center px-8 md:text-left">
              <h2 className="text-lg md:text-xl text-lightergray font-semibold">
                {sections[activeIndex].title}
              </h2>
              <p className="text-dark-400 text-xl md:text-2xl mt-2 leading-snug">
                {sections[activeIndex].subtitle}
              </p>
              <button className="mt-4 px-5 md:px-6 py-2 text-sm md:text-base bg-[#03217F] text-white rounded-md hover:bg-blue-700 transition">
                {sections[activeIndex].buttonText}
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
              <motion.img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="w-[80%] md:w-[100%] mt-8 h-auto object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
