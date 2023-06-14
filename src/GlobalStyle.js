import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(-30deg, rgba(226, 217, 213, 1) 15%, rgba(250, 235, 235, 1) 25%, rgba(224, 215, 215, 1) 40%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
`;