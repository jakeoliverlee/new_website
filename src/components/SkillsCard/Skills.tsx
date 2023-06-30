// Skills.tsx
import React from 'react';
import { SkillsContainer, SkillsCategory, SkillsHeader, SkillSet, Skill, SkillLogo, SkillName, ProviderHeader } from './stylesSkills';

interface Service {
  name: string;
}

interface SkillItem {
  name: string;
  logo: string;
  services?: Service[]; // optional services for each SkillItem
}

interface Provider {
  name: string;
  logo: string;
  services: Service[];
}

interface SkillsProps {
  frontend: SkillItem[];
  backend: SkillItem[];
  cloud: Provider[];
  cicd: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ frontend, backend, cloud, cicd }) => (
  <SkillsContainer>
    <SkillsCategory>
      <SkillsHeader>frontend</SkillsHeader>
      <SkillSet>
        {frontend.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
    <SkillsCategory>
      <SkillsHeader>backend</SkillsHeader>
      <SkillSet>
        {backend.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
    <SkillsCategory>
      <SkillsHeader>cicd</SkillsHeader>
      <SkillSet>
        {backend.map((skill) => (
          <Skill key={skill.name}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillSet>
    </SkillsCategory>
    <SkillsCategory>
      <SkillsHeader>cloud</SkillsHeader>
      {cloud.map((provider) => (
        <div key={provider.name}>
          <ProviderHeader logo={provider.logo}>{provider.name}</ProviderHeader>
          <SkillSet>
            {provider.services.map((service) => (
              <Skill key={service.name}>
                <SkillName>{service.name}</SkillName> {/* Removed SkillLogo */}
              </Skill>
            ))}
          </SkillSet>
        </div>
      ))}
    </SkillsCategory>
  </SkillsContainer>
);

export default Skills;
