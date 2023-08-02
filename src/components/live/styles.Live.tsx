import styled from 'styled-components';

export const LiveContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const ThemedText = styled.span`
  color: ${(props) => props.theme.text};
`;
