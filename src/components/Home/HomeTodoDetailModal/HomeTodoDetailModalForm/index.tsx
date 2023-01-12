import { useState } from "react";
import useModifyTodo from "../../../../hooks/todo/useModifyTodo";
import { useGetTodoQuery } from "../../../../queries/todo/todo.query";
import HomeTodoDetailModalModify from "./HomeTodoDetailModalModify";
import HomeTodoDetailModalPresenter from "./HomeTodoDetailModalPresenter";
import { HomeTodoDetailModalFormContainer } from "./style";

interface Props {
  todoId: string;
}

const HomeTodoDetailModalForm = ({ todoId }: Props) => {
  const [isModify, setIsModify] = useState(false);

  const { data: serverTodoData } = useGetTodoQuery(
    { id: todoId },
    { suspense: true }
  );

  const { todoData, onChangeText, onModifyTodo } = useModifyTodo({
    id: todoId,
    content: serverTodoData?.data.content,
    title: serverTodoData?.data.title,
    setIsModify,
  });

  return (
    <HomeTodoDetailModalFormContainer onSubmit={onModifyTodo}>
      {isModify ? (
        <HomeTodoDetailModalModify
          todoData={todoData}
          onChangeText={onChangeText}
        />
      ) : (
        <HomeTodoDetailModalPresenter
          serverTodoData={serverTodoData?.data!}
          setIsModify={setIsModify}
        />
      )}
    </HomeTodoDetailModalFormContainer>
  );
};

export default HomeTodoDetailModalForm;
