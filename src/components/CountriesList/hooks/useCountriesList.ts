import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { SingleValue } from "react-select";

import {
  LIST_COUNTRIES,
  LIST_COUNTRIES_BY_CONTINENT,
} from "../../../queries/global";
import { OptionType, TCountryProps } from "../../../types/standard";

const initialCountriesState = [
  {
    code: "",
    name: "",
    continent: {
      code: "",
    },
  },
];

const useCountriesList = () => {
  const [query, setQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("ALL");
  const [countriesList, setCountriesList] = useState(initialCountriesState);

  const { loading, error, data } = useQuery(
    selectedContinent === "ALL" ? LIST_COUNTRIES : LIST_COUNTRIES_BY_CONTINENT,
    {
      variables: {
        filter: { continent: { eq: selectedContinent } },
      },
    }
  );

  const handleOptionChange = useCallback((option: SingleValue<OptionType>) => {
    setSelectedContinent(option?.value as string);
    setQuery("");
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    if (value.length <= 0) {
      setCountriesList(data.countries);
    } else {
      setCountriesList(
        data.countries.filter((country: TCountryProps) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    data && setCountriesList(data.countries);
  }, [data, selectedContinent]);

  return {
    state: { loading, error, countriesList, query, selectedContinent },
    actions: {
      handleSearch,
      handleOptionChange,
      setQuery,
      setSelectedContinent,
    },
  };
};

export default useCountriesList;
