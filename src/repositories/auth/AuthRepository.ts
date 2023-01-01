import axios from "axios";
import { postLoginParam, postSignupParam } from "./AuthRepository.param";
import config from "../../config/config.json";
import { LoginResponse, SignupResponse } from "../../types/auth/auth.type";

class AuthRepository {
  public async postLogin({
    email,
    password,
  }: postLoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.SERVER}/users/login`, {
      email,
      password,
    });

    return data;
  }

  public async postSignup({
    email,
    password,
  }: postSignupParam): Promise<SignupResponse> {
    const { data } = await axios.post(`${config.SERVER}/users/create`, {
      email,
      password,
    });
    return data;
  }
}

export default new AuthRepository();
