import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 50px;
  gap: 40px;
`;

const CountryCard = styled.div`
  position: relative;
  display: block;

  max-width: 300px;
  height: auto;
  padding: 25px;
  border-radius: 15px;

  box-shadow: 4px 8px 28px rgb(39 44 49 / 10%), 1px 3px 8px rgb(39 44 49 / 8%);

  font-size: 14px;

  transition: 0.2s all ease-in-out;

  overflow: hidden;
`;

const CountryLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);

  text-decoration: none;

  &:hover {
    ${CountryCard} {
      transform: scale(1.05);
      transition: 0.2s all ease-in-out;
    }
  }
`;

export { ResultsWrapper, CountryLink, CountryCard };
