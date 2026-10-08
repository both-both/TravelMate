import { useState } from "react";
import { Button } from "../../elements/Button/Button";
import { SearchBarStyled, SearchInput } from "./SearchBar.styled";
import type { SearchBarProps } from "./SearchBar.types";

export const SearchBar = ({
  placeholder = "Find your next destination",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <SearchBarStyled action="/search" method="GET" role="search">
      <SearchInput
        type="search"
        name="keyword"
        value={query}
        onChange={setQuery}
        placeholder={placeholder}
        ariaLabel="Search"
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </SearchBarStyled>
  );
};
