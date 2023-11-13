import React from "react";
import { Login } from "./Login";
import { Stack } from "@mui/material";
import { useLogin } from "./useLogin";
import { Home } from "./Home";

import { Route, Routes } from "react-router-dom";

export const App = () => {
  const { loginData, onChange, onConfirmLogin } = useLogin();

  return (
    <Stack
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Login
        loginData={loginData}
        onChange={onChange}
        onConfirmLogin={onConfirmLogin}
      />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Stack>
  );
};
