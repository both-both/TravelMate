import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { CityDetails } from "../../components/modules/CityDetails/CityDetails";
import { useCity } from "../../hooks/useCities";

export const CityPage = () => {
  const { slug } = useParams();
  const { city, isLoading, error } = useCity(slug ?? "");

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!city) return <p>Byen blev ikke fundet.</p>;

  return (
    <ContentWrapper
      title={`${city.name} | TravelMate`}
      description={city.description}
    >
      <CityDetails city={city} />
    </ContentWrapper>
  );
};
