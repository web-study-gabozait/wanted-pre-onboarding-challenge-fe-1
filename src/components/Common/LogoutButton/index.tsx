import useLogout from "../../../hooks/auth/useLogout";
import { LogoutButtonContainer } from "./style";

const LogoutButton = () => {
  const { onLogout } = useLogout();

  return (
    <LogoutButtonContainer onClick={onLogout}>로그아웃</LogoutButtonContainer>
  );
};

export default LogoutButton;
