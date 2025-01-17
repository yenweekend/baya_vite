import axios from "axios"
import {apiUrl} from "../configs/apiUrl";
export const getAllProduct = async() => {
    const response = await axios.get(`${apiUrl}/api/products/get`);
    return response;
}
export const getProductDetail = async(slug) => {
    const response = await axios.get(`${apiUrl}/api/products/productdetail/${slug}`);
    return response;
}