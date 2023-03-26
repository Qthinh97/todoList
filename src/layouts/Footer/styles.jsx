import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.footer};
  height: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
