export interface Todo {
  title: string;
  content: string;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface TodosResponse {
  data: Todo[];
}

export interface TodoResponse {
  data: Todo;
}
