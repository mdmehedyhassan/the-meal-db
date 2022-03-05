import { createGlobalStyle  } from "styled-components";

export const darkTheme = {
    body: '#303030',
    text: '#e3e3e3'
}
export const lightTheme = {
    body: '#e3e3e3',
    text: '#303030'
}
export const GlobalStyles =  createGlobalStyle  `
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text}
    }
`