import { Nav } from "../Nav/Nav";
import { PlaneIcon } from "../../elements/PlaneIcon/PlaneIcon";
import {
  HeaderActions,
  HeaderStyled,
  HeaderInner,
  Logo,
} from "./Header.styled";
import { useLanguage } from "../../../context/LanguageContext/LanguageContext";
import { useLanguages } from "../../../hooks/useLanguages";
import { Select } from "../../elements/Select/Select";
import { Button } from "../../elements/Button/Button";
import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../../../context/DarkModeContext/DarkModeContext";

export const Header = () => {
  const { language, setLanguage } = useLanguage();
  const languages = useLanguages();
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <HeaderStyled>
      <HeaderInner>
        <Logo to="/">
          <PlaneIcon />
          Travel <span>Mate</span>
        </Logo>
        <Nav />

        <HeaderActions>
          <Select
            value={language}
            onChange={setLanguage}
            ariaLabel="Vælg sprog"
            options={languages.map((lang) => ({
              value: lang.code,
              label: lang.code.toUpperCase(),
            }))}
          />

          <Button isActive={!darkMode} onClick={() => setDarkMode(false)}>
            <LuSun size={16} /> Light
          </Button>

          <Button
            variant="dark"
            isActive={darkMode}
            onClick={() => setDarkMode(true)}
          >
            <LuMoon size={16} /> Dark
          </Button>
        </HeaderActions>
      </HeaderInner>
    </HeaderStyled>
  );
};
