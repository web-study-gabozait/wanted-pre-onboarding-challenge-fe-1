import styled from "styled-components";

export const HomeTodoDetailModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: black;
  opacity: 50%;
`;

export const HomeTodoDetailModalContainer = styled.div`
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

export const HomeTodoDetailModalModifyButton = styled.button`
  background: none;
  border: 0px;
  outline: none;
  font-size: 15px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
