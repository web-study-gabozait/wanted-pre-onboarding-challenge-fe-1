import { Response } from "../util/response.type";

export interface LoginResponse extends Response {
  token: string;
}
