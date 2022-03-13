import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const CountryCard = styled.div`
  position: relative;
  display: block;

  width: clamp(250px, 84%, 400px);
  height: auto;
  padding: 40px;
  border-radius: 15px;

  box-shadow: 4px 8px 28px rgb(39 44 49 / 10%), 1px 3px 8px rgb(39 44 49 / 8%);
`;

const GoBack = styled(Link)`
  position: absolute;
  top: 15px;
  right: 20px;

  text-decoration: none;
`;

const LanguagesWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 15px;
  gap: 15px;
`;

const Badge = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 20px;

  background: lightgray;

  font-size: 12px;
  color: white;
`;

export { CountryWrapper, CountryCard, LanguagesWrapper, Badge, GoBack };
