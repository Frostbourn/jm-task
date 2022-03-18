import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { SingleValue } from "react-select";

import { LIST_COUNTRIES } from "../../../queries/global";
import {
  ICountriesListProps,
  OptionType,
  TCountryProps,
} from "../../../types/standard";

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
  const [countriesList, setCountriesList] = useState<
    TCountryProps[] | undefined
  >(initialCountriesState);

  const { loading, error, data } = useQuery(LIST_COUNTRIES);

  const filterList = (value: string) => {
    const items =
      value !== "ALL"
        ? data.countries?.filter((country: TCountryProps) =>
            country?.continent?.code?.includes(value)
          )
        : data.countries;
    return items;
  };

  const handleOptionChange = (option: SingleValue<OptionType>) => {
    setSelectedContinent(option?.value as string);
    setCountriesList(filterList(option?.value!));
    setQuery("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);

    value.length <= 1
      ? setCountriesList(filterList(selectedContinent))
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
