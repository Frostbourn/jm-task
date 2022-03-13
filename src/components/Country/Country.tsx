import { memo } from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { COUNTRY } from "../../queries/global";
import { TCountryProps } from "../../types/standard";
import PageLoader from "../PageLoader/PageLoader";
import CloseSVG from "./assets/svgs/CloseSVG";
import {
  Badge,
  CountryCard,
  CountryWrapper,
  GoBack,
  LanguagesWrapper,
} from "./Country.styles";

const Country = memo(() => {
  let { code } = useParams();

  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code: code?.toLocaleUpperCase() },
  });

  if (loading || error) {
    return <>{error ? error.message : <PageLoader size={25} />}</>;
  }

  const {
    name,
    code: countryCode,
    emoji,
    languages,
  }: TCountryProps = data.country;

  return (
    <CountryWrapper>
      <CountryCard>
        <GoBack to="/">
          <CloseSVG />
        </GoBack>
        {emoji} {name} - <strong>{countryCode}</strong>
        <div>
          <small>Lanugages:</small>
        </div>
        <LanguagesWrapper>
          {languages!.map(({ name }) => (
            <Badge key={name}>{name}</Badge>
          ))}
        </LanguagesWrapper>
      </CountryCard>
    </CountryWrapper>
  );
});

export default Country;
