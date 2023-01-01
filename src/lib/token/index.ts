import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export default new Token();
