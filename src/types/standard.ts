import { ChangeEvent } from "react";
import { SingleValue } from "react-select";

type TLanguage = {
  name: string;
};

type TCountryProps = {
  code: string;
  name: string;
  continent?: {
    code: string;
  };
  emoji?: string;
  languages?: TLanguage[];
};

type TPageLoader = {
  size: number;
};

type OptionType = {
  value: string;
  label: string;
};

interface ICountriesListProps {
  countries: TCountryProps[] | undefined;
}

interface IFiltersProps {
  query: string;
  selectedContinent: string;
  handleOptionChange: (option: SingleValue<OptionType>) => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type {
  TCountryProps,
  OptionType,
  TPageLoader,
  ICountriesListProps,
  IFiltersProps,
};
