import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SignupTextInput = styled.input`
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

export const SignupSubmitButton = styled.input<{ isDisable: boolean }>`
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

export const SingupGuideText = styled.p`
  color: ${palette.gray[300]};
  font-size: 16px;
  margin-top: 20px;

  strong {
    color: ${palette.main};
    cursor: pointer;
  }
`;
