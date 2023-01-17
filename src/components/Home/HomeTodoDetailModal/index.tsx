import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../../Common/ErrorBoundary";
import { TodoModalFallbackLoader } from "../../Common/Loader";
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
          <Suspense fallback={<TodoModalFallbackLoader />}>
            <HomeTodoDetailModalForm todoId={todoId} />
          </Suspense>
        </ErrorBoundary>
      </HomeTodoDetailModalContainer>
    </>
  );
};

export default HomeTodoDetailModal;
