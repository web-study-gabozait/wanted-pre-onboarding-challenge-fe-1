import { ChangeEvent } from "react";
import TextInput from "../../../../Common/TextInput";
import { HomeTodoDetailModalModifyButton } from "../../style";
import {
  HomeTodoDetailModalModifyBottomWrap,
  HomeTodoDetailModalModifyTitleInput,
} from "./style";

interface Props {
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  todoData: { title: string; content: string };
}

const HomeTodoDetailModalModify = ({ todoData, onChangeText }: Props) => {
  return (
    <>
      <HomeTodoDetailModalModifyTitleInput
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
      <HomeTodoDetailModalModifyBottomWrap>
        <HomeTodoDetailModalModifyButton type="submit">
          저장
        </HomeTodoDetailModalModifyButton>
      </HomeTodoDetailModalModifyBottomWrap>
    </>
  );
};

export default HomeTodoDetailModalModify;
