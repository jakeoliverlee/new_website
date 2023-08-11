import React from 'react';
import { SkillsContainer, SkillsCategory, SkillSet, Skill, SkillLogo, SkillName, ProviderHeader } from './stylesSkills';

interface Service {
  name: string;
}

interface SkillItem {
  name: string;
  logo?: string;
  services?: Service[];
}

interface Provider {
  name: string;
  logo: string;
  services: Service[];
}

interface FrontendProps {
  frontend?: SkillItem[];
}

interface BackendProps {
  backend?: SkillItem[];
}

interface CicdProps {
  cicd?: SkillItem[];
}

interface CloudProps {
  cloud?: Provider[];
}

interface NetworkProps {
  network?: SkillItem[];
}

const FrontendSkills: React.FC<FrontendProps> = ({ frontend = [] }) => (
  <SkillsContainer>
    Frontend: 
    <SkillsCategory>
      <SkillSet>
        {frontend.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
  </SkillsContainer>
);

const BackendSkills: React.FC<BackendProps> = ({ backend = [] }) => (
  <SkillsContainer>
    Backend:
    <SkillsCategory>
      <SkillSet>
        {backend.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
  </SkillsContainer>
);

const CicdSkills: React.FC<CicdProps> = ({ cicd = [] }) => (
  <SkillsContainer>
    CI/CD:
    <SkillsCategory>
      <SkillSet>
        {cicd.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
  </SkillsContainer>
);

const CloudSkills: React.FC<CloudProps> = ({ cloud = [] }) => (
  <SkillsContainer>
    Cloud: 
    <SkillsCategory>
      {cloud.map((provider) => (
        <div key={provider.name}>
          <ProviderHeader logo={provider.logo}>{provider.name}</ProviderHeader>
          <SkillSet>
            {provider.services.map((service) => (
              <Skill key={service.name}>
                <SkillName>{service.name}</SkillName>
              </Skill>
            ))}
          </SkillSet>
        </div>
      ))} 
    </SkillsCategory>
  </SkillsContainer>
);


const NetworkSkills: React.FC<NetworkProps> = ({ network = [] }) => (
  <SkillsContainer>
    Networking: 
    <SkillsCategory>
      <SkillSet>
        {network.map((skill) => (
          <Skill key={skill.name}>
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
  </SkillsContainer>
);

export { FrontendSkills, BackendSkills, CicdSkills, CloudSkills, NetworkSkills };
