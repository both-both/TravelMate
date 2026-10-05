import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const ContainerStyled = styled.div`
  width: min(90%, ${theme.layout.contentWidth});
  margin-inline: auto;
`;
