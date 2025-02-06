import axios from "axios";
import { apiUrl } from "../configs/apiUrl";
export const getBlog = async (slug) => {
  const response = await axios.get(`${apiUrl}/api/blogs/get/${slug}`);
  return response;
};
export const getBlogDetail = async (slug) => {
  const response = await axios.get(`${apiUrl}/api/blogs/detail/get/${slug}`);
  return response;
};
