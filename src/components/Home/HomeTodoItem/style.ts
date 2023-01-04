import styled from "styled-components";
import { ellipsisLine } from "../../../styles/libStyle";

export const HomeTodoItemContainer = styled.div`
  width: 446px;
  min-height: 56px;
  padding: 0px 20px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const HomeTodoItemText = styled.p`
  width: 100%;
  font-size: 16px;
  color: black;
  white-space: nowrap;
  ${ellipsisLine(1)};
  margin-right: 18px;
`;
