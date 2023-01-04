import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const HomeTodoItemButtonContainer = styled.button<{ select: boolean }>`
  min-width: 22px;
  height: 22px;
  border-radius: 100%;
  border: 1px solid ${palette.gray[300]};
  background: none;
  cursor: pointer;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ select }) =>
    select &&
    css`
      border: 0px;
      background-color: ${palette.main};
    `}
`;

export const HomeTodoItemButtonIcon = styled.div<{ select: boolean }>`
  width: 14px;
  height: 14px;
  color: ${palette.gray[300]};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ select }) =>
    select &&
    css`
      color: white;
    `}
`;
