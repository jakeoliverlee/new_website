import React, { useRef, useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { Container, Title, Frame, Content, toggle, lightTheme, darkTheme, BoldText, ContactCard } from './styles';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import * as Icons from './icons';
import Navbar from './components/navbar/Navbar';
import { FrontendSkills, BackendSkills, CicdSkills, CloudSkills } from "./components/SkillsCard/Skills";
import Footer from './components/footer/Footer';
import ProjectCard from './components/ProjectCard';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<React.HTMLAttributes<HTMLDivElement> & { defaultOpen?: boolean, name: string | JSX.Element, color?: string }>(
  ({ children, name, style, defaultOpen = false, color }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [ref, { height: viewHeight }] = useMeasure();
    const { height, opacity, y } = useSpring({
      from: { height: 0, opacity: 0, y: 0 },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : 20,
      },
    });

    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];

    return (
      <Frame>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <Title color={color} style={style}>{name}</Title>
        <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
          <a.div ref={ref} style={{ y }} children={children} />
        </Content>
      </Frame>
    );
  }
);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export default function App() {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(userPrefersDark ? darkTheme : lightTheme);
  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
    setFavicon(theme);
  };

  const setFavicon = (theme: object) => {
    const favicon = document.getElementById("favicon");
    if (favicon) {
      if (theme === darkTheme) {
        favicon.setAttribute("href", "assets/favicon-dark.ico");
      } else {
        favicon.setAttribute("href", "assets/favicon-light.ico");
      }
    }
  }
  setFavicon(theme);

  const variants: Variants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 2.0,
        y: { stiffness: 1000, velocity: -100 },
      }
    }),
    closed: { opacity: 0, y: -50 },
  };

  const treeElements = [
    <Tree name="main" defaultOpen>
      <Tree name="about">
        <div style={{ marginLeft: '20px' }}>
          A backend <BoldText>engineer</BoldText>
        </div>
      </Tree>
      <Tree name="skills">
        <Tree name="frontend">
          <FrontendSkills
            frontend={[
              { name: 'React', logo: 'assets/svgs/react-javascript-js-framework-facebook-svgrepo-com.svg' },
              // ...other frontend skills
            ]}
          />
        </Tree>
        <Tree name="backend">
          <BackendSkills
            backend={[
              { name: 'Node.js', logo: 'assets/svgs/node-js-svgrepo-com.svg' },
              { name: 'Python', logo: 'assets/svgs/icons8-python.svg' },
              // ...other backend skills
            ]}
          />
        </Tree>
        <Tree name="cicd">
          <CicdSkills
            cicd={[
              { name: 'Node.js', logo: 'assets/svgs/node-js-svgrepo-com.svg' },
              { name: 'Python', logo: 'assets/svgs/icons8-python.svg' },
              // ...other cicd skills
            ]}
          />
        </Tree>
        <Tree name="cloud">
          <CloudSkills
            cloud={[
              { 
                name: 'AWS', 
                logo: 'assets/svgs/aws-icon-services.svg', 
                services: [
                  { name: 'EC2'},
                  { name: 'AutoScaling'},
                  { name: 'ELB'},
                  { name: 'VPC'},
                  { name: 'S3'},
                  { name: 'IAM'},
                  { name: 'KMS'},
                  { name: 'Cloudformation/CDK (IaC)'},
                  { name: 'CloudWatch'},
                  { name: 'Route53'},
                  // add other services here
                ], 
              },
              { 
                name: 'GCP', 
                logo: 'assets/svgs/gcp.svg',
                services: [
                  { name: 'Compute Engine' },
                  { name: 'Cloud Storage' },
                  // add other services here
                ],
              },
              // ...other cloud skills
            ]}
          />
        </Tree>
      </Tree>

      <Tree name="projects 📝">
        <Tree name="github graphs 📈">
          <ProjectCard
            title="Github Graphs"
            description="A REST API for generating custom designed graphs based on GitHub commit history. Built using Flask
            and hosted on GCP."
            techStack={[
              { name: "Python", logo: "assets/svgs/icons8-python.svg" },
              { name: "Flask", logo: "assets/svgs/flask-svgrepo-com.svg" },
              { name: "GCP", logo: "assets/svgs/gcp.svg" },
              { name: "Github Actions", logo: "assets/svgs/github-actions.svg" },
            ]}
            liveLink="#"
            sourceLink="#"
          />
        </Tree>
        <Tree name="streamline 🦈">
          <ProjectCard
            title="Streamline"
            description="Amazon-internal web application for optimizing ticket-data analysis for Data Centre Technicians.
             "
            techStack={[
              { name: "Python", logo: "assets/svgs/icons8-python.svg" },
              { name: "Typescript", logo: "assets/svgs/typescript-svgrepo-com.svg" },
              { name: "Streamlit", logo: "assets/svgs/streamlit.svg" },
              { name: "AWS", logo: "assets/svgs/aws-icon-services.svg" },
              { name: "AWS CDK", logo: "assets/svgs/Cloud Development Kit.svg" },
            ]}
            liveLink="#"
            sourceLink="#"
          />
        </Tree>
        <Tree name="personal site 💼">
        <ProjectCard
            title="Personal Site"
            description="The page you are viewing right now!"
            techStack={[
              { name: "Typescript", logo: "assets/svgs/typescript-svgrepo-com.svg" },
              { name: "React", logo: "assets/svgs/react-javascript-js-framework-facebook-svgrepo-com.svg" },
              { name: "Styled Components", logo: "assets/styled-components.png" },
              { name: "AWS", logo: "assets/svgs/aws-icon-services.svg" },
              { name: "Github Actions", logo: "assets/svgs/github-actions.svg" },
            ]}
            sourceLink="#"
          />
        </Tree>
        <Tree name="pass save 🔐">
        <ProjectCard
            title="PassSave"
            description="A desktop GUI password manager application built using tkinter."
            techStack={[
              { name: "Python", logo: "assets/svgs/icons8-python.svg" },
            ]}
            sourceLink="#"
          />
        </Tree>
      </Tree>
      <Tree name="contact">
      <ContactCard>
        <div className="details">
          Feel free to reach out to me at any time.
        </div>
        <div className="links">
          <a href="mailto:jakeoliverlee@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/jake-lee-4aa088129/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/jakeoliverlee" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </ContactCard>
      </Tree>
      <Tree name={<span>🐬 something something</span>} />
    </Tree>,
  ];
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Container>
          <AnimatePresence>
            {treeElements.map((treeElement, i) => (
              <motion.div key={i} custom={i} variants={variants} initial="closed" animate="open" exit="closed">
                {treeElement}
              </motion.div>
            ))}
          </AnimatePresence>
        </Container>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}