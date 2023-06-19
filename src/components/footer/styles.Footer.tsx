// styles.Footer.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  width: 100%;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
`;

export const FooterItem = styled.p`
  color: inherit;
  text-decoration: none;
  margin: 0;
  vertical-align: middle;
  fill: #24292e;
`;
