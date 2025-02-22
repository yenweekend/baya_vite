import axios from "axios";
import { apiUrl } from "../configs/apiUrl";
export const getProductDetail = async (slug) => {
  const response = await axios.get(
    `${apiUrl}/api/products/product-detail/${slug}`
  );
  return response;
};
