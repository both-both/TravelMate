import { useSearchParams } from "react-router-dom";
import { useCountries } from "./useCountries";
import { useCities } from "./useCities";
import { useAttractions } from "./useAttractions";

// Filtrerer en liste ud fra keyword= i URL'en. Matcher på name uden at skelne mellem store og små bogstaver.
export const useSearchFilter = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("keyword") ?? "").trim();
  const { countries, error: countryErrors } = useCountries();
  const { cities, error: cityErrors } = useCities();
  const { attractions, error: attractionErrors } = useAttractions();

  //filter alt på de søgte bogstaver
  const searchTerm = query.toLocaleLowerCase("da");

  const groups = [
    {
      title: "Lande",
      path: "countries",
      items: countries,
      error: countryErrors,
    },
    {
      title: "Byer",
      path: "cities",
      items: cities,
      error: cityErrors,
    },
    {
      title: "Seværdigheder",
      path: "attractions",
      items: attractions,
      error: attractionErrors,
    },
  ].map((group) => ({
    ...group,
    results: searchTerm
      ? group.items.filter((item) =>
          (item.name ?? "").toLocaleLowerCase("da").includes(searchTerm),
        )
      : [],
  }));

  const resultCount = groups.reduce(
    (total, group) => total + group.results.length,
    0,
  );

  return { query, groups, resultCount };
};
