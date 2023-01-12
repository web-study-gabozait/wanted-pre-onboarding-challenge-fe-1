import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const HomeTodoDetailModalPresenterBottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const HomeTodoDetailModalPresenterTitle = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: bold;
  word-break: break-all;
`;

export const HomeTodoDetailModalPresenterContent = styled.p`
  font-size: 15px;
  color: ${palette.gray[300]};
  margin-top: 10px;
  word-break: break-all;
  margin-bottom: 10px;
`;

export const HomeTodoDetailModalPresenterCreatedAt = styled.div`
  color: ${palette.gray[300]};
  font-size: 15px;
`;
