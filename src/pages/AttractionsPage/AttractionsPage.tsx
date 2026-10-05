import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { AttractionList } from "../../components/modules/AttractionList/AttractionList";
import { Hero } from "../../components/modules/Hero/Hero";

export const AttractionsPage = () => {
  return (
    <ContentWrapper
      title="Places"
      description="Udforsk alle seværdigheder"
      showTitle
    >
      <Hero />
      <AttractionList />
    </ContentWrapper>
  );
};
