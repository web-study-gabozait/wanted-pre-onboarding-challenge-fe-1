import { Response } from "../util/response.type";

export interface LoginResponse extends Response {
  token: string;
}

export interface SignupResponse extends Response {
  token: string;
}
