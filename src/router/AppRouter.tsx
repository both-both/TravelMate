import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/*  <Route path="/countries" element={<CountriesList />} />
      {/* <Route path="/countries/:id" element={<CountryPage />} />
      <Route path="/cities" element={<CitiesPage />} />
      <Route path="/cities/:id" element={<CityPage />} /> */}
    </Routes>
  );
};
