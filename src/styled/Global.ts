import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { resetLink } from "./mixins";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    color-scheme: light;
    margin: 0;
    font-family: ${theme.font.body};
    font-size: ${theme.fontsize.body};
    line-height: ${theme.lineHeight.body};
    background: ${theme.color.background};
    color: ${theme.color.black};
  }

  body.dark-mode {
    color-scheme: dark;
    background: ${theme.color.dark.background};
    color: ${theme.color.dark.text};
  }

  h1, h2, h3 {
    font-weight: ${theme.fontWeight.semibold};
  }

  h1 {
    font-family: ${theme.font.heading};
    font-size: ${theme.fontsize.h1};
    text-transform: uppercase;
  }

  h2, h3 {
    font-family: ${theme.font.body};
    line-height: ${theme.lineHeight.body};
    margin: 0 0 12px;
  }

  h2 {
    font-size: ${theme.fontsize.h2};
  }

  h3 {
    font-size: ${theme.fontsize.h3};
  }

  .page-heading {
    display: flex;
    align-items: center;
    min-height: 100px;
    margin: 0;
  }

  .section-heading {
    font-family: ${theme.font.heading};
    font-size: ${theme.fontsize.h1};
    line-height: ${theme.lineHeight.heading};
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 14px;
  }

  .footer-heading {
    font-size: ${theme.fontsize.medium};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    margin: 0 0 24px;
  }

  .footer-heading.support-heading {
    margin: 22px 0 20px
  }

  @media (max-width: ${theme.breakpoint.mobile}) {

    .section-heading {
      font-size: ${theme.fontsize.mobileHeading};
    }
  }

  button, input {
    font: inherit;
  }

  a {
    color: inherit;
    ${resetLink}
  }

  :focus-visible {
    outline: 3px solid ${theme.color.tertiary};
    outline-offset: 4px;
  }

  .skip-link {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 10;
    padding: 12px;
    background: ${theme.color.white};
    transform: translateY(-160%);
  }

  .skip-link:focus {
    transform: translateY(0);
  }
`;
