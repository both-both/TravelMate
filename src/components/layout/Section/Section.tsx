import { Link } from "react-router-dom";
import { SectionStyled } from "../../layout/Section/Section.styled";
import { SectionHeader } from "./Section.styled";
import { LuArrowRight } from "react-icons/lu";
import type { SectionProps } from "./Section.types";

export const Section = ({ title, link, linkText, children }: SectionProps) => {
  return (
    <SectionStyled>
      <SectionHeader>
        <h2>{title}</h2>
        {link && (
          <Link to={link}>
            {linkText} <LuArrowRight aria-hidden="true" />
          </Link>
        )}
      </SectionHeader>
      {children}
    </SectionStyled>
  );
};
