import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

// This is the new Flipping Card component.
const TechCard = ({ index, name, icon }) => {
  return (
    // The perspective style on the container is necessary for the 3D effect.
    <motion.div
      style={{ perspective: 1000 }}
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    >
      <motion.div
        className="relative w-32 h-32"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front side of the card */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-tertiary rounded-2xl flex justify-center items-center p-4 shadow-card"
        >
          <img src={icon} alt={name} className="w-20 h-20 object-contain" />
        </div>

        {/* Back side of the card */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute w-full h-full bg-tertiary rounded-2xl flex justify-center items-center p-4 shadow-card"
        >
          <h3 className="text-white text-[18px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The tools I use to bring ideas to life
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            index={index}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
