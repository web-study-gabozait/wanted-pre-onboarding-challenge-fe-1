export interface getTodoByIdParam {
  id: string;
}

export interface postTodoParam {
  title: string;
  content: string;
}

export interface putTodoByIdParam {
  id: string;
  title: string;
  content: string;
}

export interface deleteTodoByIdParam {
  id: string;
}
