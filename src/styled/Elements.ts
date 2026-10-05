import styled from "styled-components";
import { reset } from "./mixins";
import { Link } from "react-router-dom";
import { theme } from "./Theme";

export const MainStyle = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`;

export const ListStyled = styled.ul`
  ${reset};
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: 1rem;
  list-style-type: none;

  > a {
    display: flex;
    min-width: 0;
    text-decoration: none;
  }
`;

export const DetailsStyled = styled.div``;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: 32px;
  margin-top: 24px;
`;

export const DetailImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
`;

export const InfoBox = styled.div``;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${theme.color.primary};
  font-weight: ${theme.fontWeight.semibold};
`;

export const DetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  h1 {
    text-transform: none;
    font-size: 2.5rem;
    color: ${theme.color.tertiary};
  }
`;

export const InfoList = styled.dl`
  margin-top: 24px;

  dt {
    margin-top: 16px;
    font-weight: ${theme.fontWeight.bold};
  }

  a {
    color: ${theme.color.primary};
    text-decoration: underline;
  }
`;
