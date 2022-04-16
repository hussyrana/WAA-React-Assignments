import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../header/Header";

const AuthProtectet = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.accessToken ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
};

export default AuthProtectet;
