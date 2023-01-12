import { LoaderTodoItem, LoaderTodoList } from "./style";

export const SkeletonTodo = () => <LoaderTodoItem />;

export const TodosFallbackLoader = () => (
  <LoaderTodoList>
    <SkeletonTodo />
    <SkeletonTodo />
    <SkeletonTodo />
    <SkeletonTodo />
    <SkeletonTodo />
    <SkeletonTodo />
    <SkeletonTodo />
  </LoaderTodoList>
);
