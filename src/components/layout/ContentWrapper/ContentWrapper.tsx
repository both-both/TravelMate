import { ContentWrapperStyled } from "./ContentWrapper.styled";
import type { ContentWrapperProps } from "./ContentWrapper.type";

export const ContentWrapper = ({
  title,
  description,
  showTitle = false,
  hero,
  children,
}: ContentWrapperProps) => {
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <ContentWrapperStyled>
        {hero}
        {showTitle && <h1 className="page-heading">{title}</h1>}
        {children}
      </ContentWrapperStyled>
    </>
  );
};
