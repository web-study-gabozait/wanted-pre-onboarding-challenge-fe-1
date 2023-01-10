import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostTodoMutation } from "../../queries/todo/todo.query";

const usePostTodo = () => {
  const queryClient = useQueryClient();

  const postTodoMutation = usePostTodoMutation();

  const [todoData, setTodoData] = useState({
    title: "",
    content: "",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitTodo = async (e: FormEvent) => {
    e.preventDefault();

    const { title, content } = todoData;

    postTodoMutation.mutateAsync(
      { title, content },
      {
        onSuccess: () => {
          setTodoData({ title: "", content: "" });
          queryClient.invalidateQueries("todo/useGetTodosQuery");
        },
      }
    );
  };

  return { todoData, onChangeText, onSubmitTodo };
};

export default usePostTodo;
