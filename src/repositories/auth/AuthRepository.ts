import axios from "axios";
import { postLoginParam } from "./AuthRepository.param";
import config from "../../config/config.json";
import { LoginResponse } from "../../types/auth/auth.type";

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
}

export default new AuthRepository();
