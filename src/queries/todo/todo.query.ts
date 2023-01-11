import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import TodoRepository from "../../repositories/todo/TodoRepository";
import {
  deleteTodoByIdParam,
  getTodoByIdParam,
  postTodoParam,
  putTodoByIdParam,
} from "../../repositories/todo/TodoRepository.param";
import { TodoResponse, TodosResponse } from "../../types/todo/todo.type";

export const useGetTodosQuery = (
  options?: UseQueryOptions<
    TodosResponse,
    AxiosError,
    TodosResponse,
    "todo/useGetTodosQuery"
  >
) =>
  useQuery("todo/useGetTodosQuery", () => TodoRepository.getTodos(), {
    ...options,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useGetTodoQuery = (
  { id }: getTodoByIdParam,
  options?: UseQueryOptions<
    TodoResponse,
    AxiosError,
    TodoResponse,
    ["todo/useGetTodoQuery", string]
  >
) =>
  useQuery(
    ["todo/useGetTodoQuery", id],
    () => TodoRepository.getTodoById({ id }),
    {
      ...options,
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
