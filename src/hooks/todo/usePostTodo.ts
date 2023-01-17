import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostTodoMutation } from "../../queries/todo/todo.query";
import useValidation from "../util/useValidation";

const usePostTodo = () => {
  const queryClient = useQueryClient();

  const postTodoMutation = usePostTodoMutation();

  const { validator, getValidateResult } = useValidation();

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

    validator([todoData.title === "", todoData.content === ""]);

    const { isValid, breakIdx } = getValidateResult();

    if (!isValid && breakIdx !== null) {
      window.alert(["제목을 입력해주세요", "내용을 입력해주세요"][breakIdx]);
      return;
    }

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
