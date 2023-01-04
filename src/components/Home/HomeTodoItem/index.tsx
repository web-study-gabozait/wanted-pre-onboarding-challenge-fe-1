import { useNavigate } from "react-router-dom";
import useDeleteTodo from "../../../hooks/todo/useDeleteTodo";
import { Todo } from "../../../types/todo/todo.type";
import HomeTodoItemButton from "./HomeTodoItemButton";
import { HomeTodoItemContainer, HomeTodoItemText } from "./style";

interface Props {
  data: Todo;
}

const HomeTodoItem = ({ data }: Props) => {
  const navigate = useNavigate();

  const { onDelete, isDeleting } = useDeleteTodo({ todoId: data.id });

  return (
    <HomeTodoItemContainer onClick={() => navigate(`/todo/${data.id}`)}>
      • <HomeTodoItemText>{data.title}</HomeTodoItemText>
      <HomeTodoItemButton onClick={onDelete} disabled={isDeleting} />
    </HomeTodoItemContainer>
  );
};

export default HomeTodoItem;
