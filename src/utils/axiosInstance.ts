import axios, { Axios } from "axios";
import { geoUrl } from "../constants/locationData";

export const AxiosInstance: Axios = axios.create({
  baseURL: geoUrl,
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
