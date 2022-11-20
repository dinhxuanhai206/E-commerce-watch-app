import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjdmMzQ1OWViOThiOWJhNzg4YTBjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjczNjk2NzcsImV4cCI6MTY3NjAwOTY3N30.LeTJFrGrEs4dy8aBq6bV5-MdVG11evJBGr7XqnCowMs";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
