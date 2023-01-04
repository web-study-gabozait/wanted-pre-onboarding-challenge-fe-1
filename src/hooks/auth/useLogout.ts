import { useNavigate } from "react-router-dom";
import token from "../../lib/token";

const useLogout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    token.clearToken();
    navigate("/login");
  };

  return { onLogout };
};

export default useLogout;
