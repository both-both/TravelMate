import { Link } from "react-router-dom";
import { LuArrowLeft, LuExternalLink } from "react-icons/lu";
import type { Attraction } from "../../../types/sanity.types";
import {
  BackLink,
  DetailImage,
  DetailsGrid,
  DetailTitle,
  InfoBox,
  InfoList,
} from "../../../styled/Elements";
import { Section } from "../../layout/Section/Section";
import { Map } from "../../elements/Map/Map";

export const AttractionDetails = ({
  attraction,
}: {
  attraction: Attraction;
}) => {
  return (
    <>
      <BackLink to="/attractions">
        <LuArrowLeft aria-hidden="true" /> Back to places
      </BackLink>

      <DetailTitle>
        <h1>{attraction.name}</h1>
      </DetailTitle>

      <DetailsGrid>
        <DetailImage
          src={`${attraction.image}?w=1200&auto=format`}
          alt={attraction.name}
        />

        <InfoBox>
          <p>{attraction.description}</p>

          <InfoList>
            <dt>By</dt>
            <dd>
              <Link to={`/cities/${attraction.city.slug}`}>
                {attraction.city.name}
              </Link>
            </dd>

            <dt>Adresse</dt>
            <dd>{attraction.address}</dd>

            <dt>Koordinater</dt>
            <dd>
              {attraction.location.lat}, {attraction.location.lng}
            </dd>

            <dt>Hjemmeside</dt>
            <dd>
              <a href={attraction.website} target="_blank" rel="noreferrer">
                {attraction.website} <LuExternalLink aria-hidden="true" />
              </a>
            </dd>
          </InfoList>
        </InfoBox>
      </DetailsGrid>

      <Section title="Find på kortet">
        <Map
          lat={attraction.location.lat}
          lng={attraction.location.lng}
          title={attraction.name}
        />
      </Section>
    </>
  );
};
