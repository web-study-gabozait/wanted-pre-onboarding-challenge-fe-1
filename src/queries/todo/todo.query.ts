import { useMutation, useQuery } from "react-query";
import TodoRepository from "../../repositories/todo/TodoRepository";
import {
  deleteTodoByIdParam,
  getTodoByIdParam,
  postTodoParam,
  putTodoByIdParam,
} from "../../repositories/todo/TodoRepository.param";

export const useGetTodosQuery = () =>
  useQuery("todo/useGetTodosQuery", () => TodoRepository.getTodos(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useGetTodoQuery = ({ id }: getTodoByIdParam) =>
  useQuery(
    ["todo/useGetTodoQuery", id],
    () => TodoRepository.getTodoById({ id }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const usePostTodoMutation = () => {
  const mutation = useMutation(({ title, content }: postTodoParam) =>
    TodoRepository.postTodo({ title, content })
  );

  return mutation;
};

export const usePutTodoMutation = () => {
  const mutation = useMutation(({ id, title, content }: putTodoByIdParam) =>
    TodoRepository.putTodoById({ id, title, content })
  );

  return mutation;
};

export const useDeleteTodoMutation = () => {
  const mutation = useMutation(({ id }: deleteTodoByIdParam) =>
    TodoRepository.deleteTodoById({ id })
  );

  return mutation;
};
