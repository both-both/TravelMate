import { Link } from "react-router-dom";
import { useAttractions } from "../../../hooks/useAttractions";
import { ListStyled } from "../../../styled/Elements";
import { Card } from "../../elements/Card/Card";

export const AttractionList = ({ limit }: { limit?: number }) => {
  const { attractions, isLoading, error } = useAttractions();

  if (error) return <p role="alert">{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (attractions.length === 0) return <p>results found.</p>;

  const finalList = limit ? attractions.slice(0, limit) : attractions;

  return (
    <ListStyled>
      {finalList.map((attraction) => (
        <Link key={attraction._id} to={`/attractions/${attraction.slug}`}>
          <Card
            image={`${attraction.image}?w=500&auto=format`}
            title={attraction.name}
            subtitle={attraction.description}
            meta={attraction.address}
          />
        </Link>
      ))}
    </ListStyled>
  );
};
