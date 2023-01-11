import styled from "styled-components";

export const HomeTodoListContainer = styled.div`
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
