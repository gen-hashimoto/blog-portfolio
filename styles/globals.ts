import { css } from 'styled-components'

export const globals = css`
  :root {
    /* カラー（色） */
    --white: #ffffff;
    --gray-10: #eeeeee;
    --gray-25: #aaaaaa;
    --gray-50: #707070;
    --gray-75: #444444;
    --black: #222222;
    --accent: #f5695f;
    --accent-blue: #0d87e0;
    --accent-orange: #ff9900;

    /* タイポグラフィ（フォントサイズ） */
    --body: clamp(10px, 0.95rem + 0.2vw, 1.125rem); /* 16-18px */
    --display: clamp(4.5rem, 1.83rem + 11.34vw, 10rem); /* 72-160 */
    --heading1: clamp(2rem, 1.3rem + 3vw, 4rem); /* 32-64px */
    --heading2: calc(var(--body) * 1.5); /* 24-27px */
    --heading3: calc(var(--body) * 1.2); /* 19.2-21.6px */
    --small-heading2: clamp(0.875rem, 4vw - 10px, 1.6875rem); /* 14-27px */
    --small-heading3: calc(var(--small-heading2) * 0.86); /* 12-23px */

    /* スペース（余白・間隔） */
    --space-xs: clamp(1.25rem, 10px + 0.98vw, 1.875rem); /* 20-30px */
    --space-sm: calc(var(--space-xs) * 1.5); /* 30-45px */
    --space-md: calc(var(--space-xs) * 2); /* 40-60px */
    --space-lg: calc(var(--space-xs) * 3); /* 60-90px */
    --space-xl: calc(var(--space-xs) * 4); /* 80-120px */
    --space-jump: clamp(1.25rem, 0.35rem + 3.8vw, 3.75rem); /* 20-60px */

    /* 影 */
    --box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.05), -8px -8px 12px #fff;
    --box-shadow-hover: 10px 10px 15px rgba(0, 0, 0, 0.08),
      -10px -10px 15px #fff;
    --box-shadow-inset: inset 8px 8px 12px rgba(0, 0, 0, 0.05),
      inset -8px -8px 12px #fff;
    --box-shadow-dark: 8px 8px 12px rgba(0, 0, 0, 0.1),
      -8px -8px 12px rgba(#fff, 0.2);

    /* other */
    --transition: 0.8s var(--easing);
  }

  /* 基本設定 */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif;
    font-size: var(--body);
    color: var(--black);
  }

  h1 {
    font-size: var(--heading1);
  }

  h2 {
    font-size: var(--heading2);
  }

  h3 {
    font-size: var(--heading3);
  }

  /* リセット */
  body,
  h1,
  h2,
  h3,
  p,
  figure,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* next/image */
  span > img {
    transition: 0.2s;
  }

  /* Tailwind CSS */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`
