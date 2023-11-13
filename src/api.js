import axios from "axios";

export const Login = async (payload) => {
  const res = await axios.post(
    "https://travia-api-stg.gewaninfotech.com/login",
    payload
  );
  return res?.data;
};
