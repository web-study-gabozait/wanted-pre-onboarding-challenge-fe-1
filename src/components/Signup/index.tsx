import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token";
import { usePostSignupMutation } from "../../queries/auth/auth.query";
import { postSignupParam } from "../../repositories/auth/AuthRepository.param";
import {
  SignupContainer,
  SignupForm,
  SignupSubmitButton,
  SignupTextInput,
  SingupGuideText,
} from "./style";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<postSignupParam>();

  const navigate = useNavigate();

  const postSignupMutation = usePostSignupMutation();

  return (
    <SignupContainer>
      <SignupForm
        onSubmit={handleSubmit(({ email, password }) =>
          postSignupMutation.mutateAsync(
            { email, password },
            {
              onSuccess: ({ message, token: accessToken }) => {
                window.alert(message);
                token.setToken(ACCESS_TOKEN_KEY, accessToken);
                navigate("/");
              },
              onError: (error: any) => {
                if (error instanceof AxiosError) {
                  window.alert(error.response!.data.details);
                }
              },
            }
          )
        )}
      >
        <SignupTextInput
          {...register("email", {
            required: "이메일 입력은 필수입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          placeholder="이메일을 입력해주세요"
        />
        <SignupTextInput
          {...register("password", {
            required: "비밀번호 입력은 필수입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <SignupSubmitButton
          type="submit"
          value="회원가입"
          disabled={!isValid}
          isDisable={!isValid}
        />
      </SignupForm>
      <SingupGuideText>
        아이디가 존재하신가요?{" "}
        <strong onClick={() => navigate("/login")}>로그인</strong>
      </SingupGuideText>
    </SignupContainer>
  );
};

export default Signup;
