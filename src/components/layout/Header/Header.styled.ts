import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
  margin: auto;
  padding: 20px;

  .logo {
    text-decoration: none;
    font-size: ${theme.fontsize.h2};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.dark.control};
  }

  span {
    color: ${theme.color.primary};
  }
`;
