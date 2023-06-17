import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 20px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
`

export const Title = styled('span')`
  vertical-align: middle;
  color: ${props => props.color || "#24292e"}; // if no color prop is provided, it will fall back to #24292e
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}
