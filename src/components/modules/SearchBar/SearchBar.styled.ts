import styled from "styled-components";
import { theme } from "../../../styled/Theme";
import { Input } from "../../elements/Input/Input";

export const SearchBarStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 560px;
  padding: 6px;
  background: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  &:focus-within {
    outline: 3px solid ${theme.color.tertiary};
  }
`;

export const SearchInput = styled(Input)`
  flex: 1;
  border: 0;

  &:focus-visible {
    outline: none;
  }
`;
