import { useGetTodosQuery } from "../../quries/todo/todo.query";
import TextInput from "../Common/TextInput";
import {
  HomeContainer,
  HomeInputSubmitButton,
  HomeInputForm,
  HomeWrap,
  HomeTodoItemListWrap,
  HomeInputWrap,
} from "./style";
import HomTodoItem from "./HomeTodoItem";
import usePostTodo from "../../hooks/todo/usePostTodo";
import { useLocation } from "react-router-dom";
import HomeTodoDetailModal from "./HomeTodoDetailModal";
import LogoutButton from "../Common/LogoutButton";

const Home = () => {
  const { pathname } = useLocation();

  const { todoData, onChangeText, onSubmitTodo } = usePostTodo();

  const { data: serverTodosData } = useGetTodosQuery();

  return (
    <HomeContainer>
      <LogoutButton />
      <HomeWrap>
        <HomeInputForm onSubmit={onSubmitTodo}>
          <HomeInputWrap>
            <TextInput
              placeholder="제목을 입력해주세요"
              value={todoData.title}
              name="title"
              onChange={onChangeText}
            />
            <TextInput
              placeholder="내용을 입력해주세요"
              value={todoData.content}
              name="content"
              onChange={onChangeText}
            />
          </HomeInputWrap>
          <HomeInputSubmitButton
            disabled={todoData.content === "" || todoData.title === ""}
            isDisable={todoData.content === "" || todoData.title === ""}
          >
            제출
          </HomeInputSubmitButton>
        </HomeInputForm>
        <HomeTodoItemListWrap>
          {serverTodosData?.data.map((todo) => (
            <HomTodoItem data={todo} key={todo.id} />
          ))}
        </HomeTodoItemListWrap>
      </HomeWrap>
      {pathname.split("/")[2] && (
        <HomeTodoDetailModal todoId={pathname.split("/")[2]} />
      )}
    </HomeContainer>
  );
};

export default Home;
