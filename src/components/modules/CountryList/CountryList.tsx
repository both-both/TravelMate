import { Link } from "react-router-dom";
import { useCountries } from "../../../hooks/useCountries";
import { Card } from "../../elements/Card/Card";
import { ListStyled } from "../../../styled/Elements";

export const CountryList = ({ mode = "all" }: { mode?: "all" | "popular" }) => {
  const { countries, isLoading, error } = useCountries();

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  const finalList = mode === "popular" ? countries.slice(0, 5) : countries;

  return (
    <ListStyled>
      {finalList.map((country) => (
        <Link key={country._id} to={`/countries/${country.slug}`}>
          <Card
            image={`${country.image}?w=500&auto=format`}
            title={country.name}
            code={country.code}
            subtitle={country.description}
          />
        </Link>
      ))}
    </ListStyled>
  );
};
