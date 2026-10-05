import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../styled/Theme";
import { Container } from "../../elements/Container/Container";

export const HeaderStyled = styled.header`
  background: ${theme.color.white};
  border-bottom: 1px solid ${theme.color.border};

  body.dark-mode & {
    background: ${theme.color.dark.surface};
    border-color: ${theme.color.dark.border};
  }
`;

export const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 70px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
    padding-block: 16px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${theme.fontsize.h2};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.tertiary};

  span {
    color: ${theme.color.primary};
  }

  body.dark-mode & {
    color: ${theme.color.dark.text};

    span {
      color: ${theme.color.dark.accent};
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;
