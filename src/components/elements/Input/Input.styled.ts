import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const InputStyled = styled.input`
  width: 100%;
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  padding: 10px 14px;
  font-family: ${theme.font.body};
  font-size: ${theme.fontsize.medium};
  background: ${theme.color.white};
  color: ${theme.color.dark.control};
`;
