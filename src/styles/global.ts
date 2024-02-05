import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
            outline: none;

            box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
            transition: box-shadow 0.1s ease-in;
    }
    
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font: 400 1rem "Nunito", sans-serif;
        transition: box-shadow 0.1s ease-out;
    }

    p {
        color: ${props => props.theme.text};
        font-size: ${props => props.theme.fonts.text.sm};
    }

    span {
        color: ${props => props.theme.subtitle};
        font-size: ${props => props.theme.fonts.text.sm};
    }

    h1 {
        font-size: ${props => props.theme.fonts.title.lg};
        color: ${props => props.theme.title};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.blue};
        font-size: ${props => props.theme.fonts.link};
    }
`;
