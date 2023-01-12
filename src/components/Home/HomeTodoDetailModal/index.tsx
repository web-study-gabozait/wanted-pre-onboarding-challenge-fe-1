import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../../Common/ErrorBoundary";
import HomeTodoDetailModalForm from "./HomeTodoDetailModalForm";
import {
  HomeTodoDetailModalContainer,
  HomeTodoDetailModalOverlay,
} from "./style";

interface Props {
  todoId: string;
}

const HomeTodoDetailModal = ({ todoId }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <HomeTodoDetailModalOverlay onClick={() => navigate("/")} />
      <HomeTodoDetailModalContainer>
        <ErrorBoundary fallback={<>에러 발생</>}>
          <Suspense fallback={<>로딩중...</>}>
            <HomeTodoDetailModalForm todoId={todoId} />
          </Suspense>
        </ErrorBoundary>
      </HomeTodoDetailModalContainer>
    </>
  );
};

export default HomeTodoDetailModal;
