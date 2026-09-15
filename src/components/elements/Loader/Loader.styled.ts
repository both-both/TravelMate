import styled, { keyframes } from "styled-components";
import { reset } from "../../../styled/mixins";
import { theme } from "../../../styled/Theme";

export const ROUTE = "M 20 74 Q 120 4 220 44";

const fly = keyframes`
  0%        { offset-distance: 0%;   opacity: 0; }
  6%        { opacity: 1; }
  85%, 100% { offset-distance: 100%; }
  92%, 100% { opacity: 0; }
`;

const draw = keyframes`
  0%        { stroke-dashoffset: 100; opacity: 0; }
  6%        { opacity: 1; }
  85%, 100% { stroke-dashoffset: 0; }
  92%, 100% { opacity: 0; }
`;

export const LoaderStyled = styled.div`
  ${reset};
  width: 15rem;
  margin: 6rem auto;
  text-align: center;

  svg {
    width: 100%;
    height: auto;
  }

  .tplane-route {
    stroke: ${theme.color.border};
  }
  .tplane-trail {
    stroke: ${theme.color.primary};
    animation: ${draw} 2.4s linear infinite;
  }
  .tplane-dot {
    fill: ${theme.color.border};
  }
  .tplane-plane {
    fill: ${theme.color.tertiary};
    offset-path: path("${ROUTE}");
    offset-rotate: auto;
    animation: ${fly} 2.4s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .tplane-plane,
    .tplane-trail {
      animation: none;
    }
  }
`;

export const LoaderMessage = styled.p`
  ${reset};
  margin-top: 0.75rem;
  font-family: ${theme.font.body};
  font-size: ${theme.fontsize.body};
  color: ${theme.color.light.text};
`;
