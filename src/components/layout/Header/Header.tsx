import { Link } from "react-router-dom";
import { Container } from "../../elements/Container/Container";
import { Nav } from "../Nav/Nav";
import { PlaneIcon } from "../../elements/PlaneIcon/PlaneIcon";
import { HeaderStyled } from "./Header.styled";
import { useLanguage } from "../../../context/LanguageContext/LanguageContext";
import { Select } from "../../elements/Select/Select";

export const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <HeaderStyled>
      <Container className="logo">
        <Link to="/">
          <PlaneIcon />
          Travel <span>Mate</span>
        </Link>
      </Container>
      <Nav />

      <Container>
        <Select
          value={language}
          onChange={setLanguage}
          ariaLabel="Vælg sprog"
          options={[
            { value: "da", label: "Dansk" },
            { value: "en", label: "English" },
            { value: "es", label: "Español" },
          ]}
        ></Select>
      </Container>
    </HeaderStyled>
  );
};
