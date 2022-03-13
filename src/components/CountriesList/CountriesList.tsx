import { useState, memo } from "react";

import { SingleValue } from "react-select";

import useCountriesList from "./hooks/useCountriesList";
import { OptionType } from "../../types/standard";

import PageLoader from "../PageLoader/PageLoader";
import Results from "./components/Results/Results";
import Filters from "./components/Filters/Filters";
import { CountryListWrapper, NoResults } from "./CountriesList.styles";

const CountriesList = memo(() => {
  const [continent, setContinent] = useState("ALL");

  const {
    state: { error, loading, countriesList, query, selectedContinent },
    actions: { setQuery, setSelectedContinent, handleSearch },
  } = useCountriesList(continent);

  const handleOptionChange = (option: SingleValue<OptionType>) => {
    setContinent(option?.value as string);
    setSelectedContinent(option?.label as string);
    setQuery("");
  };

  if (loading || error) {
    return <>{error ? error.message : <PageLoader size={25} />}</>;
  }

  return (
    <CountryListWrapper>
      <Filters
        query={query}
        selectedContinent={selectedContinent}
        handleOptionChange={handleOptionChange}
        handleSearch={handleSearch}
      />
      {countriesList!.length === 0 ? (
        <NoResults>No results</NoResults>
      ) : (
        <Results countries={countriesList} />
      )}
    </CountryListWrapper>
  );
});

export default CountriesList;
