import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Stack, TextField, FormControl, Button } from "@mui/material";
import { useLogin } from "./useLogin";

export const Login = (props) => {
  const { loginData, onChange, onConfirmLogin } = props;
  const [update, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: forceUpdate },
    })
  );

  const onConfirmAllValid = () => {
    if (validator.current.allValid()) {
      onConfirmLogin();
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  return (
    <Stack width={"480px"} height={"480px"} className="login-form">
      <FormControl sx={{ padding: "24px" }}>
        <TextField
          id="outlined-error"
          label="userName"
          name="user_Name"
          value={loginData?.user_Name}
          error={validator.current.message(
            "activityName",
            loginData?.user_Name,
            "required"
          )}
          helperText={validator.current.message(
            "activityName",
            loginData?.user_Name,
            "required"
          )}
          onChange={onChange}
        />
      </FormControl>
      <FormControl sx={{ padding: "24px" }}>
        <TextField
          id="outlined-error"
          label="password"
          name="password"
          value={loginData?.password}
          error={validator.current.message(
            "activityName",
            loginData?.password,
            "required"
          )}
          helperText={validator.current.message(
            "activityName",
            loginData?.password,
            "required"
          )}
          onChange={onChange}
        />
      </FormControl>
      <Button
        sx={{ marginTop: "35px" }}
        className="button-style"
        variant="contained"
        onClick={onConfirmAllValid}
      >
        Login
      </Button>
    </Stack>
  );
};
