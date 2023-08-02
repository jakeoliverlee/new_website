import React from 'react';
import { TechStack, ProjectCard as StyledProjectCard } from '../styles';
import { Button } from '@mui/material';
import Live from './live/Live';
import Version from './version/Version';


interface ProjectProps {
  title: string;
  description: string;
  techStack: { name: string, logo: string }[];
  liveLink?: string;
  sourceLink: string;
  live?: boolean;
  version: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, liveLink, sourceLink, live, version }) => {
  return (
    <StyledProjectCard>
      <h3>{title} - <Version version={version} /></h3>
      <div className="description">
        {description}
      </div>
      <div className="links">
        {liveLink && <Button variant="outlined" href={liveLink}>Live</Button>}
        <Button variant="outlined" href={sourceLink}>Source</Button>
      </div>
      <hr />
      <TechStack>
        {techStack.map((tech, index) => (
          <img key={index} src={tech.logo} alt={tech.name} />
        ))}
      </TechStack>
      <hr />
      {live && <Live />}
    </StyledProjectCard>
  );
}

export default ProjectCard;
