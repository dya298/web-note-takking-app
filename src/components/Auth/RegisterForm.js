import { useState } from "react";
import AuthService from "../../service/AuthService";

export default function RegisterForm(props) {
  const [messages, setMessages] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    var { name, email, pass } = document.forms[0];
    if (!name.value && !email.value && !pass.value) return;
    AuthService.register({
      name: name.value,
      email: email.value,
      password: pass.value,
    })
      .then((response) => {
        setMessages({
          type: "success",
          message: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        setMessages({
          type: "error",
          message: error.response.data.error.message,
        });
      });
    console.log(messages);
  };

  const resetMessage = () => {
    setMessages("");
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
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={props.changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              className="form-control mt-1"
              placeholder="Full Name"
              name="name"
              onChange={resetMessage}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email"
              name="email"
              onChange={resetMessage}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="pass"
              onChange={resetMessage}
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
