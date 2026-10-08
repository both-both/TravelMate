// modules/Hero/Hero.tsx

import { SearchBar } from "../SearchBar/SearchBar";
import { HeroStyled } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroStyled>
      <h1>Explore the World with TravelMate</h1>
      <p>
        Discover amazing places, cities and countries. Your next adventure is
        just a click away.
      </p>
      <SearchBar />
    </HeroStyled>
  );
};
