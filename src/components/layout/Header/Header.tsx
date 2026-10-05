import { Nav } from "../Nav/Nav";
import { PlaneIcon } from "../../elements/PlaneIcon/PlaneIcon";
import {
  HeaderActions,
  HeaderStyled,
  HeaderInner,
  Logo,
} from "./Header.styled";
import { useLanguage } from "../../../context/LanguageContext/LanguageContext";
import { Select } from "../../elements/Select/Select";
import { Button } from "../../elements/Button/Button";
import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../../../context/DarkModeContext/DarkModeContext";

export const Header = () => {
  const { language, setLanguage } = useLanguage();
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
            options={[
              { value: "da", label: "DA" },
              { value: "en", label: "EN" },
              { value: "es", label: "ES" },
            ]}
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
