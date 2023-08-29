import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /* Font */
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Lighter';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  /* Reset */
  ${reset}



  :root {
    /* height */
    --vh: 100%;
    
    /* 컬러 변수 */
    --bg: #F2F2F2;
    --gray-200: #DEDEDE;
    --gray-400: #D2D2D2;
    --gray-600: #B4B4B4;
    --gray-700: #8F8F8F;
    --gray-800: #787878;
    --orange: #F68E1D;
    --green: #76D851;
    --light-green: #DFF1D7;
    --light-yellow: #FBF4CD;
    --yellow: #F1D957;
    --dirty-yellow: #F1D957;
    --light-red: #FCE1DD;
    --red: #F16A57;
  }

  /* tag reset */

  body {
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
  }

  button {
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
    }

  /* blind */
    .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    }
`;

export default GlobalStyle;
