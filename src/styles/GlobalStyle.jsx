import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.bg};
    }
`;

export default GlobalStyle;
