import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LoginTextInput = styled.input`
  width: 380px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
  padding: 18px;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 1px solid ${palette.main};
  }
`;

export const LoginSubmitButton = styled.input<{ isDisable: boolean }>`
  width: 380px;
  height: 56px;
  border-radius: 8px;
  background-color: ${palette.main};
  border: 0px;
  color: white;
  cursor: pointer;
  font-size: 14px;

  ${({ isDisable }) =>
    isDisable &&
    css`
      cursor: default;
      opacity: 40%;
    `}
`;
