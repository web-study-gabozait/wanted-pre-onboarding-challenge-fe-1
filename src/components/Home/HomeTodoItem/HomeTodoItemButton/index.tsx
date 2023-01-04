import { HomeTodoItemButtonContainer, HomeTodoItemButtonIcon } from "./style";
import { RiCheckLine } from "@react-icons/all-files/ri/RiCheckLine";
import { useState } from "react";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const HomeTodoItemButton = ({ onClick, disabled }: Props) => {
  const [select, setSelect] = useState(false);

  return (
    <HomeTodoItemButtonContainer
      onClick={(e) => {
        e.stopPropagation();
        setSelect(true);

        const id = window.setTimeout(onClick, 1000);

        return () => {
          window.clearTimeout(id);
        };
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
