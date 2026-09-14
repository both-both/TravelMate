import { Container } from "../../elements/Container/Container";
import { ContentWrapperStyled } from "./ContentWrapper.styled";
import type { ContentWrapperProps } from "./ContentWrapper.type";

export const ContentWrapper = ({ title, children }: ContentWrapperProps) => {
  return (
    <ContentWrapperStyled innerHTML="main" title={title}>
      <Container>
        <title>{title}</title>
        {children}
      </Container>
    </ContentWrapperStyled>
  );
};
