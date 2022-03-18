import { gql } from "@apollo/client";

const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      continent {
        code
      }
    }
  }
`;

const COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`;

export { LIST_COUNTRIES, COUNTRY };
