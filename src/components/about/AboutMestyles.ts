import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2em;
  background: transparent;  
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5em;
  color: ${(props) => props.theme.text};
  margin-bottom: 1em;  

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.6em;
  font-weight: 300;  
  color: ${(props) => props.theme.text};
  text-align: start;
  max-width: 60%;  
  margin-bottom: 1em;  
  word-wrap: break-word;

  span {  
    background: rgba(255, 255, 255, 0.1);
    padding: 0.1em 0.4em;
    border-radius: 3px;
    font-weight: 600;  
    transition: background 0.3s ease;

    &:hover {  // Stylish hover effect for technology names
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9em;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  background: linear-gradient(45deg, #007BFF, #00C6FF); 
  color: white;
  border: none; // Remove border
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer; 
  transition: all 0.3s ease; 
  box-shadow: 0px 5px 15px -5px rgba(0, 123, 255, 0.3); 

  &:hover {
    background: linear-gradient(45deg, #0056b3, #009ACD); 
    transform: translateY(-3px) scale(1.02);  
    box-shadow: 0px 7px 20px -5px rgba(0, 123, 255, 0.5); 
  }

  &:active {
    transform: translateY(0px) scale(1); 
    box-shadow: 0px 5px 15px -5px rgba(0, 123, 255, 0.3); 
  }
`;
