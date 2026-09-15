import { endpoints } from "../../data/Endpopints";
import { useFetch } from "../../hooks/useFetch";
import type { Country } from "../../data/Api.types";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { Loader } from "../../components/elements/Loader/Loader";

export const HomePage = () => {
  const { data, isLoading, error } = useFetch<Country[]>(endpoints.countries);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <ContentWrapper title="Travel Mate">
      {" "}
      {data?.map((country) => (
        <p key={country.id}>{country.infos[0].name}</p>
      ))}
    </ContentWrapper>
  );
};
