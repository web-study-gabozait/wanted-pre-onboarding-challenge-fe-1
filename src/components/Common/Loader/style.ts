import styled, { keyframes } from "styled-components";

export const LoaderSkeletonAnimtaion = keyframes`
     0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

export const LoaderTodoItem = styled.div`
  width: 446px;
  height: 56px;
  border-radius: 8px;
  animation: ${LoaderSkeletonAnimtaion} 1.8s infinite ease-in-out;
`;

export const LoaderTodoList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LoaderTodoModalTitle = styled.div`
  width: 100px;
  height: 34px;
  border-radius: 8px;
  animation: ${LoaderSkeletonAnimtaion} 1.8s infinite ease-in-out;
`;

export const LoaderTodoModalContent = styled.div`
  width: 320px;
  height: 15px;
  border-radius: 8px;
  animation: ${LoaderSkeletonAnimtaion} 1.8s infinite ease-in-out;
  margin-top: 10px;
`;

export const LoaderTodoModalCreatedAt = styled.div`
  width: 58px;
  height: 15px;
  border-radius: 8px;
  animation: ${LoaderSkeletonAnimtaion} 1.8s infinite ease-in-out;
  margin-top: auto;
  margin-left: auto;
`;

export const LoaderTodoModalWrap = styled.div`
  min-height: 190px;
  display: flex;
  flex-direction: column;
`;
