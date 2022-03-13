import styled from "styled-components";

const FiltersWrapper = styled.div`
  width: clamp(250px, 84%, 600px);
  margin-block: 30px 0;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 60px;
  margin-block: 30px;
  border: none;
  border-radius: 30px;

  background: rgb(247, 248, 250);

  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  text-indent: 20px;
`;

export { FiltersWrapper, SearchBox };
