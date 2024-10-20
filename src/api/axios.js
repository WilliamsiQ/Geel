import axios from "axios";

const BASE_URL = "http://localhost:3500";
export default axios.create({
  baseURL: BASE_URL,
});


// we are going to attach interceptors to this, the interceptors are going to work with jwt tokens, it 
// will refresh the token if our initial jwt request is denied or in event of expired token
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
