import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { CountryList } from "../../components/modules/CountryList/CountryList";
import { Hero } from "../../components/modules/Hero/Hero";

export const CountriesPage = () => {
  return (
    <ContentWrapper
      title="Countries"
      description="Udforsk alle lande"
      showTitle
      hero={<Hero />}
    >
      <CountryList />
    </ContentWrapper>
  );
};
