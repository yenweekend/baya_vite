import axios from "axios";
import { apiUrl } from "../configs/apiUrl";
export const getCategory = async (
  slug,
  currentPage,
  sort,
  vendors = [],
  price_range = []
) => {
  const response = await axios.get(
    `${apiUrl}/api/categories/category-detail/${slug}`,
    {
      params: {
        sort: sort,
        page: currentPage,
        vendor: vendors,
        price_range: price_range,
      },
    }
  );
  return response;
};
