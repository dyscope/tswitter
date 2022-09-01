import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        font-size: 15px;
        color: #0f1419;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        height: 100%;
    }
`;
