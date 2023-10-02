import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${({ theme: { colors } }) => colors.MainBackgroundColor};
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover; 
  height: auto;
  margin: 0 auto;
}

ul,h1, h2, h3, h4, h5, h6, p {
      padding: 0;
  margin: 0;
  list-style: none;
}
}


`;
