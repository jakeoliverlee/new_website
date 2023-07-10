import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2em;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const Heading = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Text = styled.p`
  font-size: 0.9em;
  line-height: 1.6em;
  color: ${(props) => props.theme.text};
  text-align: start;
  max-width: 50%; // Set your desired maximum width here
  word-wrap: break-word; // Ensure long words also wrap

  @media (max-width: 768px) {
    max-width: 100%; // On smaller screens, text takes full width
    font-size: 1em;
  }
`;
