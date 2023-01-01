import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../quries/auth/auth.query";
import { postLoginParam } from "../../repositories/auth/AuthRepository.param";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<postLoginParam>();

  const postLoginMutation = usePostLoginMutation();

  return (
    <form
      onSubmit={handleSubmit(({ email, password }) =>
        postLoginMutation.mutateAsync(
          { email, password },
          { onSuccess: () => {}, onError: () => {} }
        )
      )}
    >
      <input
        {...register("email", {
          required: "이메일 입력은 필수입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
        placeholder="이메일을 입력해주세요"
      />
      <input
        {...register("password", {
          required: "비밀번호 입력은 필수입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
        placeholder="비밀번호를 입력해주세요"
      />
      <input type="submit" value="로그인" disabled={!isValid} />
    </form>
  );
};

export default Login;
