import { useState } from "react";
import AuthService from "../../service/AuthService";

export default function LoginForm(props) {
  const [messages, setMessages] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, pass } = document.forms[0];
    if (!email.value && !pass.value) return;
    AuthService.login({
      email: email.value,
      password: pass.value,
    })
      .then((response) => {
        let data = response.data;
        console.log(data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("access_token", JSON.stringify(data.access_token))
        localStorage.setItem("refresh_token", JSON.stringify(data.refresh_token))
        window.location.href = '/notes'
      })
      .catch((error) => {
        setMessages({
          type: "error",
          message: "Email or password is incorrect",
        });
      });
  };

  const renderMessage = () => {
    if (messages.type === "error")
      return (
        <div className="message text-danger fw-bold mt-3">{messages.message}</div>
      );
    if (messages.type === "success")
      return (
        <div className="message text-success fw-bold mt-3">{messages.message}</div>
      );
  };

  return (
    <div className="Auth-form-container" onSubmit={handleSubmit}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={props.changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="pass"
            />
          </div>          
          {renderMessage()}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
