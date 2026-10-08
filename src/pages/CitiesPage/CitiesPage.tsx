import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { CityList } from "../../components/modules/CityList/CityList";
import { Hero } from "../../components/modules/Hero/Hero";

export const CitiesPage = () => {
  return (
    <ContentWrapper
      title="Cities"
      description="Udforsk alle byer"
      showTitle
      hero={<Hero />}
    >
      <CityList />
    </ContentWrapper>
  );
};
