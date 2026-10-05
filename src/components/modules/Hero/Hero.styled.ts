import styled from "styled-components";
import { theme } from "../../../styled/Theme";
import heroImage from "../../../assets/images/travelmate-hero.png";

export const HeroStyled = styled.section`
  padding: 48px 32px 40px;
  border-radius: 12px;
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0) 60%
    ),
    url(${heroImage}) center / cover;

  h1 {
    max-width: 520px;
    margin: 0;
    font-size: ${theme.fontsize.h1};
    line-height: 1.1;
    text-transform: none;
    color: ${theme.color.tertiary};
  }

  p {
    max-width: 420px;
    margin: 12px 0 20px;
    color: ${theme.color.tertiary};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 560px;
  padding: 6px 6px 6px 16px;
  background: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  input {
    flex: 1;
    border: 0;
    outline: 0;
    font-size: ${theme.fontsize.medium};
  }

  button {
    border: 0;
    border-radius: 8px;
    padding: 10px 28px;
    background: #0867e8;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;
