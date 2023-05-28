import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --max-width:70rem;
  --padding:2rem;
  --color-dark: #252525;
  --color-light: #FAF9F5;
  --color-light-low: #f2efe4;
  --blue-color:#586994;
  --color-accent: #F87575;
  --ff-headline: 'Montserrat';
  --ff-text: 'Raleway';
  --ff-alt: 'Merriweather';
}
*, *::before, *::after{
  box-sizing:border-box;
 }

* {
  padding: 0;
  margin: 0;
  
  font-family: var(--ff-text);
}

html{
  background-color: var(--color-light);  
}


a{
  text-decoration: none;
  color: var(--blue-color);
}

a:hover {
  color: var(--color-accent);
}
img, picutre, svg, video{
  display:block;
  max-width:100%;
}
input,textarea,button,select{
  font: inherit;
}

h1{
  font-size: 3.5rem;
}
nav ul{
  list-style: none;
}

h1,
h2,
h3,
h3,
h4,
h5,
h6, span{
  font-family: var(--ff-headline);
  
}
span,p, ul{
  font-size: 1.125rem;
  line-height: 150%;
  
}


h1,h2{
  font-size: 3rem;
  margin-bottom: 1rem;
}
.container {
  margin: auto;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
}


#__next{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} 
`;

export default GlobalStyle;
