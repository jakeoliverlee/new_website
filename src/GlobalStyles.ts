import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    scrollbar-width: thin; // for Firefox
    overflow-y: scroll; // for other browsers
  }
`
