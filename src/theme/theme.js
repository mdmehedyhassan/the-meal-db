import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    body: '#303030',
    text: '#e3e3e3',
    boxShadowStyle: "2px 2px 5px #ffffff, -2px -2px 5px #ffffff",
}
export const lightTheme = {
    body: '#e3e3e3',
    text: '#303030',
    boxShadowStyle: "2px 2px 5px #000000, -2px -2px 5px #000000",
}
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text}
    };
    
    .top-border-global-style{
        border-top: 5px solid ${props => props.theme.text}
    }
    
    .box-style-global:hover, .box-style-global-child img:hover{
        box-shadow: ${props => props.theme.boxShadowStyle};
        border-radius: 10px;
    }
`