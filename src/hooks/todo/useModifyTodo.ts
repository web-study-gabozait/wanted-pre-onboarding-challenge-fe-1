import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useQueryClient } from "react-query";
import { usePutTodoMutation } from "../../queries/todo/todo.query";
import useValidation from "../util/useValidation";

interface Props {
  title: string | undefined;
  content: string | undefined;
  id: string;
  setIsModify: Dispatch<SetStateAction<boolean>>;
}

const useModifyTodo = ({ title, content, id, setIsModify }: Props) => {
  const queryClient = useQueryClient();

  const [todoData, setTodoData] = useState({ title: "", content: "" });

  const putTodoMutation = usePutTodoMutation();

  const { validator, getValidateResult } = useValidation();

  useEffect(() => {
    if (title && content) {
      setTodoData({ title, content });
    }
  }, [title, content]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const onModifyTodo = async (e: FormEvent) => {
    e.preventDefault();

    validator([
      putTodoMutation.isLoading,
      todoData.title === "" || todoData.content === "",
      Object.entries({ title, content }).toString() ===
        Object.entries(todoData).toString(),
    ]);

    const { isValid, breakIdx } = getValidateResult();

    if (!isValid) {
      if (breakIdx === 1) {
        window.alert("내용을 입력해주세요.");
      }

      return;
    }

    putTodoMutation.mutate(
      { id: id, title: todoData.title, content: todoData.content },
      {
        onSuccess: () => {
          setIsModify(false);
          queryClient.invalidateQueries(["todo/useGetTodoQuery", id]);
        },
        onError: () => {
          window.alert("수정하는 도중 에러가 발생하였습니다.");
        },
      }
    );
  };

  return {
    todoData,
    onChangeText,
    onModifyTodo,
  };
};

export default useModifyTodo;
