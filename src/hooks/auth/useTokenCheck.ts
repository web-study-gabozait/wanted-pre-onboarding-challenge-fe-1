import { useEffect, useState } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token";

const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
