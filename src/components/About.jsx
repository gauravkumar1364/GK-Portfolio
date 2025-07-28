import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {fadeIn , textVariant} from '../utils/motion'
import { services } from '../constants';
import { p } from 'framer-motion/client';
import SectionWrapper from '../hoc/SectionWrapper';


const ServiceCard =({index , title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white font-bold text-center'>{ title } </h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>

    <motion.p variants = {fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello! I’m Gaurav Kumar, a software engineering student at Delhi Technological University with a strong enthusiasm for full-stack development and machine learning.

      I’m a quick learner who thrives on tackling complex challenges and continually expanding my skill set. My approach centers on working hand-in-hand with clients to understand their goals, ensuring each solution delivers maximum impact. With a solid foundation in computer science and hands-on experience with modern technologies, I focus on creating efficient, scalable, and user-centric applications that solve meaningful problems and drive real results. Let’s collaborate to turn your ideas into powerful digital experiences.

    </motion.p>
    <div className='mt-10 flex flex-wrap gap-4'>
        {/* Download Resume Button */}
        <motion.a
          href='public\Gaurav_resume .pdf' 
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-[#915EFF] text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-purple-900/50 transition-all duration-300'
        >
          Download Resume
        </motion.a>

        {/* Get in Touch Button */}
        <motion.a
          href='#contact' 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-gray-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300'
        >
          Get in Touch
        </motion.a>
      </div>  
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index)=>(
        <ServiceCard key ={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")