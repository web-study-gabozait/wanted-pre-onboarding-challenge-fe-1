import { Dispatch, SetStateAction } from "react";
import TimeCounting from "time-counting";
import { Todo } from "../../../../../types/todo/todo.type";
import { HomeTodoDetailModalModifyButton } from "../../style";
import {
  HomeTodoDetailModalPresenterBottomWrap,
  HomeTodoDetailModalPresenterContent,
  HomeTodoDetailModalPresenterCreatedAt,
  HomeTodoDetailModalPresenterTitle,
} from "./style";

interface Props {
  serverTodoData: Todo;
  setIsModify: Dispatch<SetStateAction<boolean>>;
}

const HomeTodoDetailModalPresenter = ({
  serverTodoData,
  setIsModify,
}: Props) => {
  return (
    <>
      <HomeTodoDetailModalPresenterTitle>
        {serverTodoData.title}
      </HomeTodoDetailModalPresenterTitle>
      <HomeTodoDetailModalPresenterContent>
        {serverTodoData.content}
      </HomeTodoDetailModalPresenterContent>
      <HomeTodoDetailModalPresenterBottomWrap>
        <HomeTodoDetailModalModifyButton onClick={() => setIsModify(true)}>
          수정
        </HomeTodoDetailModalModifyButton>
        <HomeTodoDetailModalPresenterCreatedAt>
          {TimeCounting(serverTodoData.updatedAt, { lang: "ko" })}
        </HomeTodoDetailModalPresenterCreatedAt>
      </HomeTodoDetailModalPresenterBottomWrap>
    </>
  );
};

export default HomeTodoDetailModalPresenter;
