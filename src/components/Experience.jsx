import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

// 1. Define your experience data. I've used your content.
const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Travora",
    date: "June 2025 – Present",
    points: [
      "Developed 10+ responsive and interactive web pages for Travora’s official website using React.js and Tailwind CSS, ensuring cross-device compatibility and consistent UI design.",
      "Collaborated with the design team to translate Figma prototypes into functional interfaces, resulting in a 25% improvement in user engagement metrics and overall site usability.",
      "Optimized component rendering and API calls, reducing page load times by 15% and improving overall application performance.",
      "Participated in agile development cycles, including daily stand-ups and sprint planning, using Git for version control and collaborative development.",,
    ],
  },
  
];

const Experience = () => {
  // State to keep track of the selected experience (index)
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Clickable Company/Project Tabs */}
        <div className="lg:w-1/4 flex lg:flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-gray-800">
          {experiences.map((experience, index) => (
            <button
              key={experience.company_name}
              onClick={() => setSelectedTab(index)}
              className={`w-full text-left p-4 transition-colors duration-300 relative ${
                selectedTab === index ? "text-white" : "text-secondary hover:bg-gray-800"
              }`}
            >
              {selectedTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#915EFF] rounded-md z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-medium">
                {experience.company_name === "Personal Project"
                  ? experience.title
                  : experience.company_name}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Experience Details with Animation */}
        <div className="lg:w-3/4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab} // This key is crucial for AnimatePresence to detect changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-white text-[24px] font-bold">
                {experiences[selectedTab].title}
              </h3>
              <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                {experiences[selectedTab].company_name} - {experiences[selectedTab].date}
              </p>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experiences[selectedTab].points.map((point, index) => (
                  <motion.li
                    key={`experience-point-${index}`}
                    variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
                    initial="hidden"
                    animate="show"
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
