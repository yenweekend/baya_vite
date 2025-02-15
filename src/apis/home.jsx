import axios from "axios";
import { apiUrl } from "../configs/apiUrl";
export const getHome = async () => {
  const response = await axios.get(`${apiUrl}/api/home/get`);
  return response;
};
export const getSearch = async (key, page, sort) => {
  const response = await axios.get(`${apiUrl}/api/search?q=${key}`, {
    params: {
      sort,
      page,
    },
  });
  return response;
};
