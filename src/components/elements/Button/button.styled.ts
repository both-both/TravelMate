import styled, { css } from "styled-components";
import { theme } from "../../../styled/Theme";
import type { ButtonVariant } from "./Button.types";

const variants = {
  light: css`
    background: ${theme.color.white};
    color: ${theme.color.dark.control};
  `,
  dark: css`
    background: ${theme.color.dark.control};
    color: ${theme.color.white};
  `,
  primary: css`
    background: ${theme.color.primary};
    color: ${theme.color.white};
    border-radius: 8px;
  `,
};

export const ButtonStyled = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font-family: ${theme.font.body};
  font-size: ${theme.fontsize.body};
  font-weight: ${theme.fontWeight.semibold};
  cursor: pointer;

  ${({ $variant }) => variants[$variant]}

  &[aria-pressed="true"] {
    box-shadow: ${theme.shadow.button};
  }
`;
