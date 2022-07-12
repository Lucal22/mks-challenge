import { createGlobalStyle } from 'styled-components';
import { bgWhiteColor, textWhiteColor } from './Colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }

    body{
      font-family: 'Montserrat', sans-serif;
      background-color: ${bgWhiteColor};
    }

    html, body, #root{
        height: 100%;
    }

    button {
      cursor: pointer;
      border: none;
    background-color: ${bgWhiteColor};
    }

    a{
      text-decoration: none;
      color: ${textWhiteColor};

    }
 `;
