import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 100%;
  margin-top: 60px;
  margin-left: 0;
  z-index: 1;
  transition: all 0.5s;
  background-color: #f86c6c;
  ${(props) => props.isFull && `margin-left: 250px;`};
`;
