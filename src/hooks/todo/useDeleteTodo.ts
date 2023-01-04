import { useQueryClient } from "react-query";
import { useDeleteTodoMutation } from "../../quries/todo/todo.query";

interface Props {
  todoId: string;
}

const useDeleteTodo = ({ todoId }: Props) => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useDeleteTodoMutation();

  const onDelete = async () => {
    deleteTodoMutation.mutate(
      { id: todoId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("todo/useGetTodosQuery");
        },
      }
    );
  };

  return { onDelete, isDeleting: deleteTodoMutation.isLoading };
};

export default useDeleteTodo;
