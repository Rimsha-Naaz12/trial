import axios from "axios";

const API = axios.create({
  baseURL: "https://trial-2-inna.onrender.com/api/products",
});

export default API;