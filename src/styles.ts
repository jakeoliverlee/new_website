import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const darkTheme = {
  body: "#18181b",
  text: "#fff",
}

export const lightTheme = {
  body: "#fff",
  text: "#000"
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 450px; // adjust this value as needed
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 23px;
  line-height: 24px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding-left: 0px;
  }
  
  @media (max-width: 414px) {
    font-size: 18px;
    line-height: 18px;
    padding-left: 25px;
    margin-left: 1rem
  }
`;




export const BoldText = styled.span`
  font-weight: bold;
`;

export const Frame = styled.div`
  position: relative;
  padding: 4px 0 0;
  text-overflow: ellipsis;
  overflow-x: hidden;
  vertical-align: middle;
  color: ${(props) => props.theme.text};
  fill: ${(props) => props.theme.text};
`;

export const Title = styled.span`
  vertical-align: middle;
  color: ${(props) => props.theme.text};
`;

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin: 10px 14px;
  padding: 0 0 0 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;


export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

export const TechStack = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  min-height: 3rem;

  img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1.25rem;
    display: inline-block;

    &:last-child {
      margin-right: 0.5rem;
    }
  }
`;


export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);

  .description {
    font-size: 1.1rem;
    color: ${(props) => props.theme.text};
    margin-bottom: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .links {
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;

    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      margin-right: 1rem;
    }
  }

  hr {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.text};
    opacity: 0.2;
    margin: 1rem 0;
  }

  @media (max-width: 600px) {
    width: 75%; // make it full width on smaller screens
    padding: 0.5rem; // reduce padding on smaller screens
    margin: 1rem;

    .description {
      font-size: 1rem; // reduce font size on smaller screens
    }

    .links {
      flex-wrap: wrap;

      a {
        margin-right: 0.5rem; // reduce margin on smaller screens
      }
    }
  }
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);

  .details {
    font-size: 1.1rem;
    color: ${(props) => props.theme.text};
    max-width: 100%;
    margin-bottom: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .links {
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;

    a {
      color: ${(props) => props.theme.text};
      text-decoration: underline;
      margin-right: 1rem;

      &:hover {
        color: #61dafb;
      }
    }
  }

  hr {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.text};
    opacity: 0.2;
    margin: 1rem 0;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    

    .links {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1rem;
  }

  
`;