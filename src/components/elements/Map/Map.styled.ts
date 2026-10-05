import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 350px;
  border: 0;
  border-radius: 12px;
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  color: ${theme.color.mutedText};
  text-decoration: underline;
`;
