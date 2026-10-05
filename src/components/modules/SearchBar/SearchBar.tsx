// modules/SearchBar/SearchBar.tsx
import { useState, type FormEvent } from "react";
import { Button } from "../../elements/Button/Button";
import { SearchBarStyled, SearchInput } from "./SearchBar.styled";
import type { SearchBarProps } from "./SearchBar.types";

export const SearchBar = ({
  onSearch,
  placeholder = "Search for countries, cities or places...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <SearchBarStyled onSubmit={handleSubmit} role="search">
      <SearchInput
        type="search"
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
