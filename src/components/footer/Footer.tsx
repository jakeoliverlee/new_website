// Footer.tsx
import React from 'react';
import { FooterContainer, FooterItem } from './styles.Footer';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterItem>&copy; {new Date().getFullYear()} jakeoliverlee</FooterItem>
    </FooterContainer>
  );
};

export default Footer;
