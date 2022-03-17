import useCountriesList from "./hooks/useCountriesList";

import PageLoader from "../PageLoader/PageLoader";
import Results from "./components/Results/Results";
import Filters from "./components/Filters/Filters";
import { CountryListWrapper, NoResults } from "./CountriesList.styles";

const CountriesList = () => {
  const {
    state: { error, loading, countriesList, query, selectedContinent },
    actions: { handleSearch, handleOptionChange },
  } = useCountriesList();

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
};

export default CountriesList;
