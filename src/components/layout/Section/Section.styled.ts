import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const SectionStyled = styled.section`
  margin-block: 24px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    margin: 0;
    font-size: ${theme.fontsize.h2};
    color: var(--color-heading);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--color-link);
    font-weight: ${theme.fontWeight.semibold};
  }
`;
