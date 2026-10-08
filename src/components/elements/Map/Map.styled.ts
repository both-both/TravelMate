import styled from "styled-components";

export const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 250px;
  border: 0;
  border-radius: 12px;
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  color: var(--color-muted);
  text-decoration: underline;
`;
