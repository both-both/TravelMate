import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  svg {
    position: absolute;
    pointer-events: none;
    color: ${theme.color.dark.control};
  }

  .globe {
    left: 14px;
  }

  .chevron {
    right: 14px;
  }
`;

export const SelectStyled = styled.select`
  appearance: none;
  border: 1px solid #e3e8ef;
  border-radius: 9px;
  padding: 12px 40px 12px 44px;
  background: ${theme.color.white};
  color: ${theme.color.dark.control};

  font-family: ${theme.font.body};
  font-size: ${theme.fontsize.body};
  font-weight: ${theme.fontWeight.semibold};

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${theme.color.primary};
    outline-offset: 2px;
  }
`;

export const DarkButton = styled(SelectStyled)`
  background: ${theme.color.primary};
  color: #ffffff;
`;
