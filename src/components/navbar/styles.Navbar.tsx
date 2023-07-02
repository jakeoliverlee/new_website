import styled from 'styled-components';


export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
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

export const NavbarItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavbarItem = styled.a`
  color: inherit;
  text-decoration: none;
  vertical-align: middle;
  fill: #24292e;

  &:hover {
    color: #61dafb;
  }
`;

export const NavbarTitle = styled.h1`
  font-size: 1.5em;
  color: inherit;
  margin: 0;
  text-decoration: underline;
  vertical-align: middle;
`;

export const NavbarButton = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    background-color: #61dafb;
  }
`;
