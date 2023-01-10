import { useMutation } from "react-query";
import AuthRepository from "../../repositories/auth/AuthRepository";
import {
  postLoginParam,
  postSignupParam,
} from "../../repositories/auth/AuthRepository.param";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ email, password }: postLoginParam) =>
    AuthRepository.postLogin({ email, password })
  );

  return mutation;
};

export const usePostSignupMutation = () => {
  const mutation = useMutation(({ email, password }: postSignupParam) =>
    AuthRepository.postSignup({ email, password })
  );

  return mutation;
};
