import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token";
import { usePostLoginMutation } from "../../queries/auth/auth.query";
import { postLoginParam } from "../../repositories/auth/AuthRepository.param";
import {
  LoginContainer,
  LoginForm,
  LoginGuideText,
  LoginSubmitButton,
  LoginTextInput,
} from "./style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<postLoginParam>();

  const navigate = useNavigate();

  const postLoginMutation = usePostLoginMutation();

  return (
    <LoginContainer>
      <LoginForm
        onSubmit={handleSubmit(({ email, password }) =>
          postLoginMutation.mutateAsync(
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
        <LoginTextInput
          {...register("email", {
            required: "이메일 입력은 필수입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          placeholder="이메일을 입력해주세요"
        />
        <LoginTextInput
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
        <LoginSubmitButton
          type="submit"
          value="로그인"
          disabled={!isValid}
          isDisable={!isValid}
        />
      </LoginForm>
      <LoginGuideText>
        아이디가 존재하지 않으신가요?{" "}
        <strong onClick={() => navigate("/signup")}>회원가입</strong>
      </LoginGuideText>
    </LoginContainer>
  );
};

export default Login;
