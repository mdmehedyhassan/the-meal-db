import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    nameBg: '#ffffff',
    body: '#303030',
    text: '#e3e3e3',
    boxShadowStyle: "5px 5px 20px #ffffff, -5px -5px 20px #ffffff",
}
export const lightTheme = {
    nameBg: '#000000',
    body: '#e3e3e3',
    text: '#303030',
    boxShadowStyle: "5px 5px 20px #000000, -5px -5px 20px #000000",
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
        background: ${props => props.theme.text};
        color: ${props => props.theme.body};
    }
    .all-name-global-style{
        color: gray;
    }
    .all-name-global-style:hover{
        color: red;
    }
    .browse-by-name{
        display: flex;
        flex-wrap: wrap;
    }
    .browse-by-name div{
        background: ${props => props.theme.nameBg};
        color: ${props => props.theme.body};
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        padding: 5px 10px;
        margin: 6px;
        border-radius: 5px;
        cursor: pointer;
    }
    .browse-by-name div:hover{
        background: ${props => props.theme.body};
        color: ${props => props.theme.nameBg};
        box-shadow: ${props => props.theme.boxShadowStyle};
    }
    
    
`