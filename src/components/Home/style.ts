import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const HomeWrap = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  box-sizing: border-box;
`;

export const HomeInputForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-bottom: 30px;
`;

export const HomeInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const HomeInputSubmitButton = styled.button<{ isDisable: boolean }>`
  width: 56px;
  height: 122px;
  border-radius: 8px;
  background-color: ${palette.main};
  color: white;
  border: 0px;
  padding: 0px;
  cursor: pointer;

  ${({ isDisable }) =>
    isDisable &&
    css`
      cursor: default;
      opacity: 40%;
    `}
`;

export const HomeTodoItemListWrap = styled.div`
  width: 448px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  row-gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
