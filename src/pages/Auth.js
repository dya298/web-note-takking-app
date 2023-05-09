import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import "../css/auth.css";

export default function Auth() {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return <LoginForm changeAuthMode={changeAuthMode} />;
  }

  return <RegisterForm changeAuthMode={changeAuthMode} />;
}
