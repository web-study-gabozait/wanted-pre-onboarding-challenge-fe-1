import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useQueryClient } from "react-query";
import { usePutTodoMutation } from "../../quries/todo/todo.query";

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

    if (putTodoMutation.isLoading) {
      return;
    }

    if (
      Object.entries({ title, content }).toString() ===
      Object.entries(todoData).toString()
    ) {
      return;
    }

    if (todoData.title === "" || todoData.content === "") {
      window.alert("내용을 입력해주세요.");
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
