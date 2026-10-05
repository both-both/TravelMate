import { Link } from "react-router-dom";
import { LuArrowLeft, LuExternalLink } from "react-icons/lu";
import type { CityDetail } from "../../../types/sanity.types";
import {
  BackLink,
  DetailImage,
  DetailsGrid,
  DetailTitle,
  InfoBox,
  InfoList,
  ListStyled,
} from "../../../styled/Elements";
import { Section } from "../../layout/Section/Section";
import { Card } from "../../elements/Card/Card";
import { Map } from "../../elements/Map/Map";

export const CityDetails = ({ city }: { city: CityDetail }) => {
  // Byer har ingen adresse i CMS'et. Vi bruger byens første seværdighed.
  const place = city.attractions[0];

  return (
    <>
      <BackLink to="/cities">
        <LuArrowLeft aria-hidden="true" /> Back to cities
      </BackLink>

      <DetailTitle>
        <img
          src={`https://flagcdn.com/${city.country.code.toLowerCase()}.svg`}
          alt=""
          width="56"
          height="40"
        />
        <h1>{city.name}</h1>
      </DetailTitle>

      <DetailsGrid>
        <DetailImage src={`${city.image}?w=1200&auto=format`} alt={city.name} />

        <InfoBox>
          <p>{city.description}</p>

          <InfoList>
            <dt>Land</dt>
            <dd>
              <Link to={`/countries/${city.country.slug}`}>
                {city.country.name}
              </Link>
            </dd>

            {place && (
              <>
                <dt>Adresse</dt>
                <dd>{place.address}</dd>

                <dt>Koordinater</dt>
                <dd>
                  {place.location.lat}, {place.location.lng}
                </dd>

                <dt>Hjemmeside</dt>
                <dd>
                  <a href={place.website} target="_blank" rel="noreferrer">
                    {place.website} <LuExternalLink aria-hidden="true" />
                  </a>
                </dd>
              </>
            )}
          </InfoList>
        </InfoBox>
      </DetailsGrid>

      {place && (
        <Section title="Find på kortet">
          <Map
            lat={place.location.lat}
            lng={place.location.lng}
            title={city.name}
          />
        </Section>
      )}

      <Section
        title={`Popular places in ${city.name}`}
        link="/attractions"
        linkText="View all places"
      >
        <ListStyled>
          {city.attractions.map((attraction) => (
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
      </Section>
    </>
  );
};
