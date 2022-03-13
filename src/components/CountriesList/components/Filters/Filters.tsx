import { memo } from "react";

import Select from "react-select";

import { options } from "../../constans";
import { IFiltersProps } from "../../../../types/standard";
import { FiltersWrapper, SearchBox } from "./Filters.styles";

const Filters = memo(
  ({
    query,
    selectedContinent,
    handleOptionChange,
    handleSearch,
  }: IFiltersProps) => {
    return (
      <FiltersWrapper>
        <Select
          options={options}
          onChange={handleOptionChange}
          value={options.filter((option) => option.label === selectedContinent)}
        />
        <SearchBox
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </FiltersWrapper>
    );
  }
);

export default Filters;
