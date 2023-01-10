import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeCounting from "time-counting";
import useModifyTodo from "../../../hooks/todo/useModifyTodo";
import { useGetTodoQuery } from "../../../queries/todo/todo.query";
import TextInput from "../../Common/TextInput";
import {
  HomeTodoDetailModalBottomWrap,
  HomeTodoDetailModalContainer,
  HomeTodoDetailModalContent,
  HomeTodoDetailModalCreatedAt,
  HomeTodoDetailModalModifyButton,
  HomeTodoDetailModalOverlay,
  HomeTodoDetailModalTitle,
  HomeTodoDetailModalTitleInput,
} from "./style";

interface Props {
  todoId: string;
}

const HomeTodoDetailModal = ({ todoId }: Props) => {
  const navigate = useNavigate();

  const [isModify, setIsModify] = useState(false);

  const { data: serverTodoData } = useGetTodoQuery({ id: todoId });

  const { todoData, onChangeText, onModifyTodo } = useModifyTodo({
    id: todoId,
    content: serverTodoData?.data.content,
    title: serverTodoData?.data.title,
    setIsModify,
  });

  return (
    <>
      <HomeTodoDetailModalOverlay onClick={() => navigate("/")} />
      <HomeTodoDetailModalContainer onSubmit={onModifyTodo}>
        {isModify ? (
          <>
            <HomeTodoDetailModalTitleInput
              name="title"
              value={todoData.title}
              onChange={onChangeText}
            />
            <TextInput
              name="content"
              customStyle={{ width: "100%", marginTop: 10 }}
              value={todoData.content}
              onChange={onChangeText}
            />
          </>
        ) : (
          <>
            <HomeTodoDetailModalTitle>
              {serverTodoData?.data.title}
            </HomeTodoDetailModalTitle>
            <HomeTodoDetailModalContent>
              {serverTodoData?.data.content}
            </HomeTodoDetailModalContent>
          </>
        )}
        <HomeTodoDetailModalBottomWrap>
          {isModify ? (
            <HomeTodoDetailModalModifyButton>
              저장
            </HomeTodoDetailModalModifyButton>
          ) : (
            <HomeTodoDetailModalModifyButton onClick={() => setIsModify(true)}>
              수정
            </HomeTodoDetailModalModifyButton>
          )}

          <HomeTodoDetailModalCreatedAt>
            {TimeCounting(serverTodoData?.data.updatedAt!, { lang: "ko" })}
          </HomeTodoDetailModalCreatedAt>
        </HomeTodoDetailModalBottomWrap>
      </HomeTodoDetailModalContainer>
    </>
  );
};

export default HomeTodoDetailModal;
