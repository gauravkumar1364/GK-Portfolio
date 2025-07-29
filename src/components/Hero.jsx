import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          {/* FIX: Added a space between the style variable and the text-white class */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Gaurav</span>
          </h1>
          {/* FIX: Replaced hardcoded font size with the responsive style variable */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A driven problem solver passionate about crafting innovative software. Currently pursuing my Bachelor’s in Software Engineering at Delhi Technological University, I bring creativity, technical expertise, and a relentless curiosity to every project.
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
