import React from "react";
import { useImmer } from "use-immer";
import { Login } from "./api";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useImmer({
    user_Name: "",
    password: "",
  });

  const [details, setDetails] = useImmer(null);
  console.log("details: ", details);

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginData((draft) => {
      draft[name] = value;
      return draft;
    });
  };

  const login = useMutation(Login, {
    onSuccess: (data) => {
      console.log("data: ", data);
      navigate("/Home", { replace: true });
      setDetails((draft) => {
        draft = data;
        return draft;
      });
    },
    onError: (data) => {
      console.log("data: ", data);
      // errorMessage(data.response.data.errors[0]);
    },
    onSettled: () => {
      // queryClient.invalidateQueries("create");
    },
  });

  const onConfirmLogin = () => {
    login?.mutate(loginData);
  };

  return {
    loginData,
    onChange,
    onConfirmLogin,
  };
};
