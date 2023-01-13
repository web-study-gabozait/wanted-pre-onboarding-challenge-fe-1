import {
  LoaderTodoItem,
  LoaderTodoList,
  LoaderTodoModalContent,
  LoaderTodoModalCreatedAt,
  LoaderTodoModalTitle,
  LoaderTodoModalWrap,
} from "./style";

export const TodosFallbackLoader = () => (
  <LoaderTodoList>
    <LoaderTodoItem />
    <LoaderTodoItem />
    <LoaderTodoItem />
    <LoaderTodoItem />
    <LoaderTodoItem />
    <LoaderTodoItem />
    <LoaderTodoItem />
  </LoaderTodoList>
);

export const TodoModalFallbackLoader = () => (
  <LoaderTodoModalWrap>
    <LoaderTodoModalTitle />
    <LoaderTodoModalContent />
    <LoaderTodoModalContent />
    <LoaderTodoModalContent />
    <LoaderTodoModalCreatedAt />
  </LoaderTodoModalWrap>
);
