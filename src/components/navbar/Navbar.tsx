import React, { useState, useEffect } from 'react';
import { NavbarContainer, NavbarItem, NavbarTitle, NavbarItemsContainer, NavbarButton } from './styles.Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Confetti from 'react-confetti';

const Navbar: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight }); // ensures confetti covers entire page

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (showConfetti) {
      interval = setInterval(() => {
        setOpacity((oldOpacity) => Math.max(0, oldOpacity - 0.01)); // fade out opacity gradually

        if (opacity <= 0.01) {
          setShowConfetti(false);
          clearInterval(interval);
        }
      }, 30); // 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [showConfetti, opacity]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavbarContainer>
      <NavbarTitle>jakeoliverlee</NavbarTitle>
      <NavbarItemsContainer>
        <NavbarButton href="/resume.pdf" download onClick={() => {setShowConfetti(true); setOpacity(1)}}>
          Download Resume
        </NavbarButton>
        <NavbarItem href="https://github.com/jakeoliverlee" target="__blank">
          <FaGithub size={24} />
        </NavbarItem>
        <NavbarItem href="https://linkedin.com">
          <FaLinkedin size={24} />
        </NavbarItem>
      </NavbarItemsContainer>
      {showConfetti && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: `${opacity}`,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <Confetti width={windowDimensions.width} height={windowDimensions.height} />
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
