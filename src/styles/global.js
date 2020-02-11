import { createGlobalStyle, css } from 'styled-components';
import { lighten } from 'polished';

import colors from './colors';
import spacing from './spacing';

export default createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,400i,700&display=swap');

  // Reset CSS
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .app {
    background-color: #f0f0f0;
    color: ${colors.textDark};
    font-family: 'Libre Franklin', sans-serif;
    height: 100%;
    margin: 0 auto;
    max-width: 960px;
    overflow: hidden;
    overflow-y: auto;

    .card {
      padding: 20px;
      margin: ${spacing.defaultMargin};
      background-color: white;
      border-radius: 5px;
      box-shadow: ${colors.materialShadowNear};
    }

    form {
      .form-group {
        margin: 10px 0;

        label {
          font-size: 18px;
        }

        input {
          margin-top: 10px;
          padding: 15px;
          font-size: 18px;
          border-radius: 5px;
          border: 1px solid ${lighten('0.4', colors.secundary)};
          outline: none;
          box-sizing: border-box;

          &:focus {
            border-color: ${lighten('0.1', colors.secundary)};
          }

          &:active {
            outline: none;
          }
        }
      }
    }

    h2 {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    // OS-based text selection color is too mainstream!
    ::selection {
      background-color: ${colors.primary}
      color: $dark-text;
    }

    a {
      color: unset;
      text-decoration: none;
    }

  }

`}`;
