import styled from 'styled-components';

export const LiveContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Optional: You can add padding or any other styling attributes you want for the container here. */
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.mode === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const ThemedText = styled.span`
  color: ${(props) => props.theme.textColor};
  transition: color 0.3s ease;
`;
