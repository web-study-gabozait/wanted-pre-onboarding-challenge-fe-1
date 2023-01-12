import { HomeTodoItemButtonContainer, HomeTodoItemButtonIcon } from "./style";
import { RiCheckLine } from "@react-icons/all-files/ri/RiCheckLine";
import { useState } from "react";
import useTimeout from "../../../../hooks/util/useTimeout";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const HomeTodoItemButton = ({ onClick, disabled }: Props) => {
  const [select, setSelect] = useState(false);

  const { starter } = useTimeout({ callback: onClick, ms: 1000 });

  return (
    <HomeTodoItemButtonContainer
      onClick={(e) => {
        e.stopPropagation();
        setSelect(true);
        starter();
      }}
      disabled={disabled}
      select={select}
    >
      <HomeTodoItemButtonIcon select={select}>
        <RiCheckLine />
      </HomeTodoItemButtonIcon>
    </HomeTodoItemButtonContainer>
  );
};

export default HomeTodoItemButton;
