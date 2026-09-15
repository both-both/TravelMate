import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${theme.color.dark.control};

  a {
    padding: 8px;

    transition:
      color 0.2s,
      border-color 0.2s;
  }
  a:hover {
    color: ${theme.color.primary};

    background-color: ${theme.color.primary}20;
    border-radius: 6px;
  }
`;
