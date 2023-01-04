import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const HomeTodoDetailModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: black;
  opacity: 50%;
`;

export const HomeTodoDetailModalContainer = styled.form`
  width: 400px;
  min-height: 270px;
  border-radius: 20px;
  background-color: white;
  padding: 40px;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

export const HomeTodoDetailModalTitle = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: bold;
  word-break: break-all;
`;

export const HomeTodoDetailModalContent = styled.p`
  font-size: 15px;
  color: ${palette.gray[300]};
  margin-top: 10px;
  word-break: break-all;
  margin-bottom: 10px;
`;

export const HomeTodoDetailModalTitleInput = styled.input`
  font-size: 30px;
  color: black;
  border: 0px;
  font-weight: bold;
  background: none;
  outline: none;
`;

export const HomeTodoDetailModalBottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const HomeTodoDetailModalModifyButton = styled.button`
  background: none;
  border: 0px;
  outline: none;
  font-size: 15px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;

export const HomeTodoDetailModalCreatedAt = styled.div`
  color: ${palette.gray[300]};
  font-size: 15px;
`;
