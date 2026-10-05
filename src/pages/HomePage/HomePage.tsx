import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

import { Hero } from "../../components/modules/Hero/Hero";
import { Section } from "../../components/layout/Section/Section";
import { CountryList } from "../../components/modules/CountryList/CountryList";
import { CityList } from "../../components/modules/CityList/CityList";
import { AttractionList } from "../../components/modules/AttractionList/AttractionList";

export const HomePage = () => {
  return (
    <ContentWrapper title="Travel Mate" description="Find din næste rejse her">
      <Hero />
      <Section
        title="Popular Countries"
        link="/countries"
        linkText="View all countries"
      >
        <CountryList mode="popular" />
      </Section>
      <Section title="Popular Cities" link="/cities" linkText="View all cities">
        <CityList limit={5} />
      </Section>
      <Section
        title="Featured Places"
        link="/attractions"
        linkText="View all places"
      >
        <AttractionList limit={5} />
      </Section>
    </ContentWrapper>
  );
};
