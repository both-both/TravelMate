import styled from "styled-components";
import type { ContainerStyleProps } from "./Container.types";

export const ContainerStyled = styled.div<ContainerStyleProps>`
  background-color: ${({ $color }) => $color ?? "transparent"};
`;
