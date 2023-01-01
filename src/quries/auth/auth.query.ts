import { useMutation } from "react-query";
import AuthRepository from "../../repositories/auth/AuthRepository";
import { postLoginParam } from "../../repositories/auth/AuthRepository.param";

export const usePostLoginMutation = () => {
  const muatation = useMutation(({ email, password }: postLoginParam) =>
    AuthRepository.postLogin({ email, password })
  );

  return muatation;
};
