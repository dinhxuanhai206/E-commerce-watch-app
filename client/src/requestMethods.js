import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjdmMzQ1OWViOThiOWJhNzg4YTBjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE3NzM0MSwiZXhwIjoxNjc3ODE3MzQxfQ.aequER9Pqoz6Vu-TzK2RB1oheUMrYmErlZ0KXfNBxDA";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).userInfo.accessToken;

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
