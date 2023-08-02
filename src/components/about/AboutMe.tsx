// AboutMe.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import { BoldText } from '../../styles';
import { AboutMeContainer, Heading, Text } from './AboutMestyles';

const AboutMe = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <Text>
          Hey there! 
          Professionally, I spend my time looking after Data Centre Infrastructure for Amazon, and have been enjoying every
          part of it since 2020! 
        </Text>
        <Text>
         Feel free to reach out to me, I am most active on email. 
        </Text>
      </AboutMeContainer>
    </motion.div>
  );
};

export default AboutMe;
