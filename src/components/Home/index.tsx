import TextInput from "../Common/TextInput";
import {
  HomeContainer,
  HomeInputSubmitButton,
  HomeInputForm,
  HomeWrap,
  HomeInputWrap,
} from "./style";
import usePostTodo from "../../hooks/todo/usePostTodo";
import { useLocation } from "react-router-dom";
import HomeTodoDetailModal from "./HomeTodoDetailModal";
import LogoutButton from "../Common/LogoutButton";
import { Suspense } from "react";
import HomeTodoList from "./HomeTodoList";
import ErrorBoundary from "../Common/ErrorBoundary";
import { TodosFallbackLoader } from "../Common/Loader";

const Home = () => {
  const { pathname } = useLocation();

  const { todoData, onChangeText, onSubmitTodo } = usePostTodo();

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
        <ErrorBoundary fallback={<>에러 발생</>}>
          <Suspense fallback={<TodosFallbackLoader />}>
            <HomeTodoList />
          </Suspense>
        </ErrorBoundary>
      </HomeWrap>
      {pathname.split("/")[2] && (
        <HomeTodoDetailModal todoId={pathname.split("/")[2]} />
      )}
    </HomeContainer>
  );
};

export default Home;
