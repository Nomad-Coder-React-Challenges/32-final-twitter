import { css, Global, Theme, useTheme } from '@emotion/react';

const style = ({ theme }: { theme: Theme }) => css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff')
      format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-display: fallback;
  }

  /* reset.css */
  * {
    font-family: Pretendard, sans-serif;
    margin: 0;
    padding: 0;
    font: inherit;
    line-height: 100%;
    box-sizing: border-box;
  }
  *:not(svg),
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
    white-space: pre-wrap;
  }

  html,
  body,
  #__next {
    height: 100%;
    font-family: Pretendard, sans-serif;
    scroll-behavior: smooth;
    background-color: ${theme.colors.mono.white};
    color: ${theme.colors.mono.black};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  hr {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  textarea {
    background-color: transparent;
  }
  /* reset.css end */

  svg[fill='none'] > path[fill='current'] {
    fill: ${theme.colors.mono.black};
  }

  /** react-tooltip custom style */

  :root {
    /* --rt-color-white: #fff; */
    /* --rt-color-dark: ${theme.colors.mono[400]}; */
    /* --rt-color-success: #8dc572; */
    /* --rt-color-error: #be6464; */
    /* --rt-color-warning: #f0ad4e; */
    /* --rt-color-info: #337ab7; */
    /* --rt-opacity: 0.9; */

    /** react-tooltip custom style end */
  }
`;

const GlobalStyles = () => {
  const theme = useTheme();

  return <Global styles={style({ theme })} />;
};

export default GlobalStyles;
