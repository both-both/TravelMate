import { endpoints } from "../../data/Endpoints";
import { useFetch } from "../../hooks/useFetch";
import type { Country } from "../../types/api.types";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { Loader } from "../../components/elements/Loader/Loader";
import { Hero } from "../../components/modules/Hero/Hero";
import { Section } from "../../components/layout/Section/Section";
import { CountryList } from "../../components/modules/CountryList/CountryList";
import { CityList } from "../../components/modules/CityList/CityList";

export const HomePage = () => {
  const { data, isLoading, error } = useFetch<Country[]>(endpoints.countries);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

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
    </ContentWrapper>
  );
};
