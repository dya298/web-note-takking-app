import http from "../http-common";

class AuthService {
  register(user) {
    return http.post("/auth/register", user);
  }

  login(user) {
    return http.post("/auth/login", user);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();