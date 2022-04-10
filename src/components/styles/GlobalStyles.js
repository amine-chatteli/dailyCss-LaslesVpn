import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background: #FFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width:1440px;
  margin-inline:auto;
}

@font-face {
  font-family: 'Rubik';
  src: local('Rubik'), url(./media/fonts/Rubik-VariableFont_wght.ttf) format('truetype');
}

h1{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 3.12rem;
    line-height: 3.8rem;
    color: #0B132A;
    margin-bottom:1.45rem;
}
h2{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 2.19rem;
    line-height: 3.12rem;
    color: #0B132A;
}

p{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
}
`;

export default GlobalStyle;
