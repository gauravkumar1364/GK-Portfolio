import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

// SVG Icons for social media links
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.817-6.044 6.817h-3.308l7.73-8.805-7.993-11.01h6.788l4.646 6.425 5.43-6.425zm-1.42 19.48h2.25l-10.25-13.8h-2.35l10.35 13.8z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex flex-col items-center py-5 bg-transparent`}>
      <div className="w-full flex flex-col items-center max-w-7xl">
        <div className="flex gap-6 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/gaurav-kumar-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            whileTap={{ scale: 0.9 }}
            className="text-secondary"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/gauravkumar1364"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            whileTap={{ scale: 0.9 }}
            className="text-secondary"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://x.com/GauravKumar2364?t=VCU98x0Uw6ejWQ6cZI0x2w&s=08"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            whileTap={{ scale: 0.9 }}
            className="text-secondary"
          >
            <TwitterIcon />
          </motion.a>
        </div>
        <p className="text-secondary text-sm text-center">
          © 2025 Gaurav Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
