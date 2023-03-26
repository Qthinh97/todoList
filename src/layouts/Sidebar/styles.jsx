import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const sidebarWrapper = styled.div`
  left: -250px;
  padding: 16px;
  margin-top: 56px;
  position: absolute;
  text-align: start;
  font-size: 16px;
  width: 250px;
  min-height: 100vh;
  background-color: #7f8b00;
  transition: all 0.5s;
  overflow: hidden;

  ${(props) =>
    props.isShow &&
    css`
      left: 0;
    `}
`;

export const sidebarItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ff3f3fb4;
    color: #fff;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: red;
      color: white;
    `}
`;
