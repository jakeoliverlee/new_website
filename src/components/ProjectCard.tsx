import React, { useState } from 'react';
import { TechStack, ProjectCard as StyledProjectCard } from '../styles';
import { Button, CircularProgress } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  techStack: { name: string, logo: string }[];
  liveLink?: string;
  sourceLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, liveLink, sourceLink }) => {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    const apiEndpoint = 'https://jakeoliverlee-githubgraphs.nw.r.appspot.com/v1/commit-graph?username=jakeoliverlee&repo=jakeoliverlee.com&theme=rainbow';
    const img = new Image();
    img.src = apiEndpoint;
    img.onload = () => {
      setApiResponse(apiEndpoint);
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
    };
  };

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
      <hr />
      <div className="api-response-section">
        <Button variant="outlined" onClick={handleButtonClick} style={{color: 'white'}}>Try it out!</Button>
        {loading ? <CircularProgress /> : apiResponse && <img src={apiResponse} alt="API response" style={{borderRadius: '10px', margin: '10px', maxWidth: '100%', height: 'auto'}} />}
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
