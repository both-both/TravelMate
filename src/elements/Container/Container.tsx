import { ContainerStyled } from "./Container.styled";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  innerHTML = "div",
  className,
  children,
  title,
}: ContainerProps) => {
  return (
    <ContainerStyled as={innerHTML} className={className} title={title}>
      {children}
    </ContainerStyled>
  );
};
