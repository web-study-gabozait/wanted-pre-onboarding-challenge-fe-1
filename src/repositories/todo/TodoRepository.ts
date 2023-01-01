import { customAxios } from "../../lib/axios";
import { TodoResponse, TodosResponse } from "../../types/todo/todo.type";
import {
  deleteTodoByIdParam,
  getTodoByIdParam,
  postTodoParam,
  putTodoByIdParam,
} from "./TodoRepository.param";

class TodoRepository {
  public async getTodos(): Promise<TodosResponse> {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async getTodoById({ id }: getTodoByIdParam): Promise<TodoResponse> {
    const { data } = await customAxios.get(`/todos/${id}`);
    return data;
  }

  public async postTodo({ title, content }: postTodoParam): Promise<void> {
    await customAxios.post("/todos", { title, content });
  }

  public async putTodoById({
    id,
    title,
    content,
  }: putTodoByIdParam): Promise<void> {
    await customAxios.put(`/todos/${id}`, { title, content });
  }

  public async deleteTodoById({ id }: deleteTodoByIdParam): Promise<void> {
    await customAxios.delete(`/todos/${id}`);
  }
}

export default new TodoRepository();
