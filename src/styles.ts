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
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 20px;
  line-height: 21px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const Frame = styled.div`
  position: relative;
  padding: 4px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  margin-left: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);

  .description {
    font-size: 1.1rem;
    color: ${(props) => props.theme.text};
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;

    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      margin-right: 1rem
    }
  }

  hr {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.text};
    opacity: 0.2;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProjectCardMiniStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);

  .description {
    font-size: 0.8rem;
    color: ${(props) => props.theme.text};
    margin-bottom: 0.5rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
    }
  }

  hr {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.text};
    opacity: 0.2;
    margin: 0.5rem 0;
  }

  // Hide this component on larger screens
  @media (min-width: 769px) {
    display: none;
  }
`;


