import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { CountriesPage } from "../pages/CountriesPage/CountriesPage";
import { CitiesPage } from "../pages/CitiesPage/CitiesPage";
import { AttractionsPage } from "../pages/AttractionsPage/AttractionsPage";
import { CityPage } from "../pages/CityPage/CityPage";
import { CountryPage } from "../pages/CountryPage/CountryPage";
import { AttractionPage } from "../pages/AttractionPage/AttractionPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/countries/:slug" element={<CountryPage />} />

      <Route path="/cities" element={<CitiesPage />} />
      <Route path="/cities/:slug" element={<CityPage />} />

      <Route path="/attractions" element={<AttractionsPage />} />
      <Route path="/attractions/:slug" element={<AttractionPage />} />

      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};
