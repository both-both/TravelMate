import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/countries" element={<CountriesPage />} />
      <Route path="/countries/:id" element={<CountryPage />} />
      <Route path="/cities" element={<CitiesPage />} />
      <Route path="/cities/:id" element={<CityPage />} /> */}
    </Routes>
  );
};
