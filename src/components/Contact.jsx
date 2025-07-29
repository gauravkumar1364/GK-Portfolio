import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gaurav } from "../assets"; 

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gaurav Kumar",
          from_email: form.email,
          to_email: "gauravkumar13010@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    // FIX: Removed xl:mt-10 and overflow-hidden to prevent z-index issues with the navbar
    <div className={`flex xl:flex-row flex-col-reverse gap-8`}>
      {/* Left Side: Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6'
        >
          {/* Form fields remain the same */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your good name?" className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>Your email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your web address?" className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>Your Message</span>
            <textarea rows={5} name='message' value={form.message} onChange={handleChange} placeholder='What you want to say?' className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'/>
          </label>
          <button type='submit' className='bg-tertiary py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Right Side: New "Digital V-Card" Panel */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[420px] h-auto flex items-center justify-center'
      >
        <div className="bg-tertiary p-8 rounded-2xl w-full max-w-sm h-full flex flex-col justify-center items-center text-center shadow-lg border border-gray-800">
          {/* Profile Picture */}
          <div className="w-32 h-32 mb-4">
             <img 
               src={gaurav}
               alt="Gaurav Kumar"
               className="w-full h-full rounded-full object-cover border-4 border-[#915EFF]"
             />
          </div>
          
          {/* Name and Title */}
          <h3 className="text-white text-[24px] font-bold">Gaurav Kumar</h3>
          <p className="text-secondary mt-1 text-[16px]">Software Engineer</p>
          
          <div className="w-full border-t border-gray-700 my-6"></div>

          {/* Direct Email */}
          <div className="flex flex-col items-center gap-2">
             <p className="text-secondary text-[14px]">REACH OUT DIRECTLY</p>
             <a href="mailto:gauravkumar13010@gmail.com" className="text-white font-medium hover:text-[#915EFF] transition-colors duration-300">
                gauravkumar13010@gmail.com
             </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
