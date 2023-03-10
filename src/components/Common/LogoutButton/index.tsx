import useLogout from "../../../hooks/auth/useLogout";
import { LogoutButtonContainer } from "./style";

const LogoutButton = () => {
  const { onLogout } = useLogout();

  return (
    <LogoutButtonContainer onClick={onLogout}>๋ก๊ทธ์์</LogoutButtonContainer>
  );
};

export default LogoutButton;
