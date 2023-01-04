import { CSSProperties, InputHTMLAttributes } from "react";
import { TextInputContainer } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSProperties;
}

const TextInput = ({ customStyle, ...attr }: Props) => {
  return <TextInputContainer {...attr} style={{ ...customStyle }} />;
};

export default TextInput;
