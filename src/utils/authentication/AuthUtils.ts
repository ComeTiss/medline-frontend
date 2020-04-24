import { ACCESS_TOKEN_COOKIE_NAME, USER_ID_COOKIE_NAME } from "../constants";

export function isAuthenticated(cookies: any) {
  const access_token = cookies[ACCESS_TOKEN_COOKIE_NAME];
  const userId = cookies[USER_ID_COOKIE_NAME];
  return !!access_token && !!userId;
}
