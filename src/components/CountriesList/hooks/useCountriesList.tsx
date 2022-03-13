import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { LIST_COUNTRIES, LIST_COUNTRIES_BY_CONTINENT } from "../../../queries/global";
import { TCountryProps } from "../../../types/standard";

const initialState = [
  {
    code: "",
    name: "",
    continent: {
      code: "",
    },
  },
];

const useCountriesList = (continent: string) => {
  const [query, setQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Worldwide");
  const [countriesList, setCountriesList] = useState(initialState);

  const { loading, error, data } = useQuery(
    continent === "ALL" ? LIST_COUNTRIES : LIST_COUNTRIES_BY_CONTINENT,
    {
      variables: {
        filter: { continent: { eq: continent } },
      },
    }
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    data && setCountriesList(data.countries);
    if (query) {
      const filteredResults = data.countries.filter((country: TCountryProps) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      );
      setCountriesList(filteredResults);
    }
  }, [data, continent, query]);

  return {
    state: { loading, error, countriesList, query, selectedContinent },
    actions: { handleSearch, setQuery, setSelectedContinent },
  };
};

export default useCountriesList;
