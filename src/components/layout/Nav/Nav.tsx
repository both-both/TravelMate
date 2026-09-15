import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.styled";

export const Nav = () => {
  return (
    <NavStyled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Countries</NavLink>
      <NavLink to="/">Cities</NavLink>
      <NavLink to="/">Attractions</NavLink>
      <NavLink to="/">About</NavLink>
    </NavStyled>
  );
};
