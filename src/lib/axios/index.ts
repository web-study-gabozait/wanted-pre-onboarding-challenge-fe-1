import axios from "axios";
import config from "../../config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_KEY } from "../../constants/token/token.constant";
import token from "../token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers : {
    [REQUEST_KEY] : token.getToken(ACCESS_TOKEN_KEY)
  }
});
