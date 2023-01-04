import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const TextInputContainer = styled.input`
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
