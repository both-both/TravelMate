import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import type { CountryDetail } from "../../../types/sanity.types";
import {
  BackLink,
  DetailImage,
  DetailsGrid,
  DetailTitle,
  InfoBox,
  ListStyled,
} from "../../../styled/Elements";
import { Section } from "../../layout/Section/Section";
import { Card } from "../../elements/Card/Card";

export const CountryDetails = ({ country }: { country: CountryDetail }) => {
  return (
    <>
      <BackLink to="/countries">
        <LuArrowLeft aria-hidden="true" /> Back to countries
      </BackLink>

      <DetailTitle>
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt=""
          width="56"
          height="40"
        />
        <h1>{country.name}</h1>
      </DetailTitle>

      <DetailsGrid>
        <DetailImage
          src={`${country.image}?w=1200&auto=format`}
          alt={country.name}
        />

        <InfoBox>
          <p>{country.description}</p>
        </InfoBox>
      </DetailsGrid>

      <Section title={`Cities in ${country.name}`}>
        <ListStyled>
          {country.cities.map((city) => (
            <Link key={city._id} to={`/cities/${city.slug}`}>
              <Card
                image={`${city.image}?w=500&auto=format`}
                title={city.name}
                subtitle={city.description}
              />
            </Link>
          ))}
        </ListStyled>
      </Section>
    </>
  );
};
