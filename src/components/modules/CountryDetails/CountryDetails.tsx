import { useParams } from "react-router-dom";
import { useCountries } from "../../../hooks/useCountries";

export const CountryDetails = () => {};
const { id } = useParams();
const { country, error } = useCountries(id!);
