import { useParams } from "react-router-dom";
import { useCountry } from "../../../hooks/useCountries";
import { useLanguage } from "../../../context/LanguageContext/LanguageContext";
import {
  DetailImage,
  DetailsGrid,
  DetailsStyled,
  InfoBox,
} from "../../../styled/Elements";
import { SERVER_URL } from "../../../data/Endpoints";
import { CardIcon } from "../../elements/Card/Card.styled";

export const CountryDetails = () => {
  const { id } = useParams();
  const { country, error } = useCountry(id!);
  const { language } = useLanguage();

  // Håndtere fejl og venter på data
  if (error) return <p role="alert">{error}</p>;
  if (!country) return <p>Henter land...</p>;

  // Finder den danske beskrivelse
  const info = country.infos.find((info) => info.language.code === language);

  if (!info) return <p>Ingen dansk beskrivelse fundet.</p>;

  return (
    <DetailsStyled>
      <h1>{info.name}</h1>

      <DetailsGrid>
        <DetailImage
          src={new URL(country.image, SERVER_URL).href}
          alt={info.name}
        />
        <InfoBox>
          <p>{info.description}</p>
          <CardIcon
            src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
            alt={`Flag for ${country.code}`}
            width="80"
            height="50"
          />
        </InfoBox>
      </DetailsGrid>
    </DetailsStyled>
  );
};
