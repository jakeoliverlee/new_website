// stylesSkills.ts
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  margin: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkillsCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkillsHeader = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const ProviderHeader = styled.h3<{ logo: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.logo});
  }
`;

export const SkillSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media screen and (max-width: 600px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  font-family: monospace;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const SkillLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const SkillName = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-family: monospace;
`;
