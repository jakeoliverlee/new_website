import React from 'react';
import { TechStack, ProjectCard as StyledProjectCard } from '../styles';
import { Button } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  techStack: { name: string, logo: string }[];
  liveLink?: string;
  sourceLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, liveLink, sourceLink }) => {
  return (
    <StyledProjectCard>
      <h3>{title}</h3>
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
    </StyledProjectCard>
  );
}

export default ProjectCard;