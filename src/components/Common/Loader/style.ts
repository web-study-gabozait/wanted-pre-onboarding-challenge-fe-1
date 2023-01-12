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
