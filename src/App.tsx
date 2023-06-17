import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, Frame, Content, toggle } from './styles'
import * as Icons from './icons'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import styled from 'styled-components';



function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}
// test
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
`;

export default function App() {
  return (
    <>
    <AppContainer>
      <Navbar /> 
      <Container>
        <Tree name="main" defaultOpen>
          <Tree name="I will be red" color="green">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 200,
                padding: 10,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'black',
                  borderRadius: 5,
                }}
              />
            </div>
          </Tree>
          <Tree name="subtree with children">
            <Tree name="hello" className="text-red-500" />
            <Tree name="sub-subtree with children">
              <Tree name="child 1" style={{ color: '#37ceff' }} />
              <Tree name="child 2" style={{ color: '#37ceff' }} />
              <Tree name="child 3" style={{ color: '#37ceff' }} />
              <Tree name="custom content">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 200,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'black',
                      borderRadius: 5,
                    }}
                  />
                </div>
              </Tree>
            </Tree>
            <Tree name="hello" />
          </Tree>
          <Tree name="contact" />
          <Tree name={<span>🐬 something something</span>} />
        </Tree>
      </Container>
      <Footer />
    </AppContainer>
    </>
  )
}

