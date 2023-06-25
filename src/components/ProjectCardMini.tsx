import React from 'react';
import { ProjectCardMiniStyled } from '../styles'; // renamed import from styles

interface ProjectProps {
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
}

const ProjectCardMini: React.FC<ProjectProps> = ({ title, description, liveLink, sourceLink }) => {
  return (
    <ProjectCardMiniStyled>  
      <h3>{title}</h3>
      <div className="description">
        {description}
      </div>
      <div className="links">
        <a href={liveLink}>Live</a>
        <a href={sourceLink}>Source</a>
      </div>
    </ProjectCardMiniStyled>  
  );
}

export default ProjectCardMini;
