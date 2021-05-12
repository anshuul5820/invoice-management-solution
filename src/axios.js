import axios from "axios";
//used to create local axios instances


const instance = axios.create({
  baseURL: "http://localhost:8080/1806196/",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSATNCE";

export default axios;
