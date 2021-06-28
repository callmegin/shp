import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  html {
    /* height: 100%; */
    --grey: #D9D9D9;
    --darkgrey: #35393d;
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
    /* line-height: 2; */
    background: var(--light);
    color: var(--darkgrey);
    /* overflow-y: auto; */
  }
  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 3rem;
    font-weight: 400;
  }
  h1:hover, h2:hover, h3:hover {
    cursor: default;
  }
  a {
    text-decoration: none;
    color: var(--darkgrey);
  }
  a:hover {
    /* text-decoration: underline; */
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  p:hover {
    cursor: inherit;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
