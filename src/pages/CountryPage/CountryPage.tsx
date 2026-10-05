import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { CountryDetails } from "../../components/modules/CountryDetails/CountryDetails";
import { useCountry } from "../../hooks/useCountries";

export const CountryPage = () => {
  const { slug } = useParams();
  const { country, isLoading, error } = useCountry(slug ?? "");

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!country) return <p>Landet blev ikke fundet.</p>;

  return (
    <ContentWrapper
      title={`${country.name} | TravelMate`}
      description={country.description}
    >
      <CountryDetails country={country} />
    </ContentWrapper>
  );
};
