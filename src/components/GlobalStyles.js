import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        font-family: Raleway, Arial, Helvetica, sans-serif;
    }
    body {
        font-family: Raleway;
        box-sizing: border-box;
        background-color: #f5f5f5;
    }
    a {
        text-decoration: none;
    }
    input {
        font-family: Raleway;
        font-size: 20px;
        color: #000000;
        width: 90vw;
        height: 58px;
        border-radius: 5px;
    }

`

export default GlobalStyle