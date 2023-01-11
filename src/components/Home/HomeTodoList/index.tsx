import { useGetTodosQuery } from "../../../queries/todo/todo.query";
import HomeTodoItem from "../HomeTodoItem";
import { HomeTodoListContainer } from "./style";

const HomeTodoList = () => {
  const { data: serverTodosData } = useGetTodosQuery({ suspense: true });

  return (
    <HomeTodoListContainer>
      {serverTodosData?.data.map((todo) => (
        <HomeTodoItem data={todo} key={todo.id} />
      ))}
    </HomeTodoListContainer>
  );
};

export default HomeTodoList;
