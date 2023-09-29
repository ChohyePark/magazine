import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'S-CoreDream-3Light';
}

ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
a {
  text-decoration: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
`;

export default GlobalStyle;
