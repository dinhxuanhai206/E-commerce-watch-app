// import axios from "axios";

// const BASE_URL = "http://localhost:5500/api/";
 //const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });

import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
//  
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjdmMzQ1OWViOThiOWJhNzg4YTBjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjY5MjM4MTIsImV4cCI6MTY3NTU2MzgxMn0.dclXhyUw85bIJNKBJxrnVlhRW3LXjpFDFBtR7mo2vLs";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
