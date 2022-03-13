import { memo } from "react";

import { ICountriesListProps, TCountryProps } from "../../../../types/standard";

import { ResultsWrapper, CountryCard, CountryLink } from "./Results.styles";

const Results = memo(({ countries }: ICountriesListProps) => {
  return (
    <ResultsWrapper>
      {countries?.map(({ name, code }: TCountryProps) => (
        <CountryLink key={code} to={code.toLocaleLowerCase()}>
          <CountryCard>
            {name} - <strong>{code}</strong>
          </CountryCard>
        </CountryLink>
      ))}
    </ResultsWrapper>
  );
});

export default Results;
