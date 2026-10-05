import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext/LanguageContext";
import { useCities } from "../../../hooks/useCities";
import { useCountries } from "../../../hooks/useCountries";
import { ListStyled } from "../../../styled/Elements";
import { Card } from "../../elements/Card/Card";
import { SERVER_URL } from "../../../data/Endpoints";

export const CityList = ({ limit }: { limit?: number }) => {
  const { cities, isLoading, error } = useCities();
  const { countries } = useCountries();
  const { language } = useLanguage();

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  const finalList = limit ? cities.slice(0, limit) : cities;

  return (
    <ListStyled>
      {finalList.map((city) => {
        const info = city.infos.find((info) => info.language.code === language);
        if (!info) return null;

        const country = countries.find(
          (country) => country.id === city.countryId,
        );
        const countryName = country?.infos.find(
          (info) => info.language.code === language,
        )?.name;

        return (
          <Link key={city.id} to={`/cities/${city.id}`}>
            <Card
              image={new URL(city.image, SERVER_URL).href}
              title={info.name}
              meta={countryName}
            />
          </Link>
        );
      })}
    </ListStyled>
  );
};
