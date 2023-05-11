import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
    const access_token = JSON.parse(localStorage.getItem("access_token"));

  return access_token ? <Outlet /> : <Navigate to="/" />;
}
