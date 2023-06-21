import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import {
   Container, Title, Frame, Content, toggle, lightTheme, darkTheme, BoldText,
   TechStack
  } from './styles'
import { motion, AnimatePresence, Variants } from 'framer-motion';
import * as Icons from './icons'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import styled, { ThemeProvider } from 'styled-components';



function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}


const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | JSX.Element
    color?: string
  }
>(({ children, name, style, defaultOpen = false, color }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title color={color} style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})

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
            <div>A backend <BoldText>engineer</BoldText></div>
          </Tree>
          <Tree name="projects">
          <Tree name="github graphs 📈" className="text-red-500">
          <TechStack>
              <img src="assets/svgs/flask-svgrepo-com.svg" alt="Flask" />
              <img src="assets/svgs/node-js-svgrepo-com.svg" alt="nodejs" />
          </TechStack>
          </Tree>
          <Tree name="streamline 🦈">
          <TechStack>
              <img src="assets/svgs/express-svgrepo-com.svg" alt="express" />
              <img src="assets/svgs/node-js-svgrepo-com.svg" alt="nodejs" />
          </TechStack>
            </Tree>
            <Tree name="pass save 🔐">
              <Tree name="hello" />
            </Tree>
          </Tree>
          <Tree name="contact" />
          <Tree name={<span>🐬 something something</span>} />
        </Tree>
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Container>
        <AnimatePresence>
            {treeElements.map((treeElement, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {treeElement}
              </motion.div>
            ))}
          </AnimatePresence>
        </Container>
      <Footer />
    </AppContainer>
  </ThemeProvider>
  )
}