import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { SingleValue } from "react-select";

import { LIST_COUNTRIES } from "../../../queries/global";
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
  console.log(countriesList);
  const { loading, error, data } = useQuery(LIST_COUNTRIES);

  const handleOptionChange = (option: SingleValue<OptionType>) => {
    setSelectedContinent(option?.value as string);

    setCountriesList(
      option?.value !== "ALL"
        ? data?.countries?.filter((country: TCountryProps) =>
            country?.continent?.code?.includes(option?.value as string)
          )
        : data?.countries
    );

    setQuery("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    value.length <= 0
      ? setCountriesList(
          data?.countries?.filter((country: TCountryProps) =>
            country?.continent?.code?.includes(selectedContinent)
          )
        )
      : setCountriesList(
          countriesList?.filter((country: TCountryProps) =>
            country?.name?.toLowerCase().includes(query.toLowerCase())
          )
        );
  };

  useEffect(() => {
    data && setCountriesList(data?.countries);
  }, [data]);

  return {
    state: { loading, error, countriesList, query, selectedContinent },
    actions: {
      handleSearch,
      handleOptionChange,
      setQuery,
    },
  };
};

export default useCountriesList;
