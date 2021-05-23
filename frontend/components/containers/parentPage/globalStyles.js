import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  html {
    /* height: 100%; */
    --grey: #D9D9D9;
    --light: #FFFFFF;
    --dark: #0D1B2A;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 75%; //could use 10px instead, but this should be better for resizing in the browser
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-style: normal; 
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 1.5rem;
    line-height: 2;
    background: var(--light);
    color: var(--dark);
  }
  h1,h2,h3 {
    margin: 0;
    padding: 0;
  }
  h1:hover, h2:hover, h3:hover {
    cursor: default;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  a:hover {
    text-decoration: underline;
  }
  p:hover {
    cursor: default;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
