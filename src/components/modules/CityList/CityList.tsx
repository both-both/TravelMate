import { Link } from "react-router-dom";
import { useCities } from "../../../hooks/useCities";
import { ListStyled } from "../../../styled/Elements";
import { Card } from "../../elements/Card/Card";

export const CityList = ({ limit }: { limit?: number }) => {
  const { cities, isLoading, error } = useCities();

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (cities.length === 0) return <p>No results found.</p>;

  const finalList = limit ? cities.slice(0, limit) : cities;

  return (
    <ListStyled>
      {finalList.map((city) => (
        <Link key={city._id} to={`/cities/${city.slug}`}>
          <Card
            image={`${city.image}?w=500&auto=format`}
            title={city.name}
            meta={city.country.name}
          />
        </Link>
      ))}
    </ListStyled>
  );
};
