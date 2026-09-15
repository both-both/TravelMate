import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const SelectStyled = styled.select`
  &[aria-pressed="true"] {
    /* outline: 2px solid ${theme.color.primary};
    outline-offset: 3px; */
  }

  border: none;
  border-radius: 999px;

  padding: 10px 16px;

  background: #eef5fc;
  color: ${theme.color.primary};

  cursor: pointer;
`;

export const DarkButton = styled(SelectStyled)`
  background: ${theme.color.primary};
  color: #ffffff;
`;
