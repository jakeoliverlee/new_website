import React from 'react';
import { motion } from 'framer-motion';
import { AboutMeContainer, Heading, Text, ContactButton } from './AboutMestyles';

const AboutMe = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <Text>
          Hey there! 
          Professionally, I spend my time looking after Data Centre Infrastructure for Amazon, and have been enjoying every
          part of it since 2020. 
        </Text>
        <Text>
          I use my passion for development to solve real-world problems. I am particularly interested in backend technologies. I frequently work with <span>Python</span> and <span>Golang</span>.
        </Text>
        <Text>
          Feel free to reach out to me. I am most active on email. 
        </Text>
        <ContactButton href="mailto:youremail@example.com">Contact Me</ContactButton>
      </AboutMeContainer>
    </motion.div>
  );
};

export default AboutMe;
