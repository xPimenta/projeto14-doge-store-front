import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Josefin Sans', sans-serif;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;
        box-sizing: border-box;
        background-color: #6EDCD9;
    }
    a {
        text-decoration: none;
    }
    input {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
        color: #000000;
        width: 90vw;
        height: 58px;
        border-radius: 5px;
    }

`

export default GlobalStyle