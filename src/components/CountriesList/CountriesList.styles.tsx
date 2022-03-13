import styled from "styled-components";

const CountryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;


const NoResults = styled.div`
  color: rgba(0, 0, 0, 0.5);

  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
`;

export {
  CountryListWrapper,
  NoResults
};
