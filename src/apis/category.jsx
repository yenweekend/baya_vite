import axios from "axios";
import { apiUrl } from "../configs/apiUrl";
export const getCategory = async (slug) => {
  const response = await axios.get(
    `${apiUrl}/api/categories/category-detail/${slug}`
  );
  return response;
};
