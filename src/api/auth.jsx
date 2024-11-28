import axios from "axios"
import {apiUrl} from "../configs/apiUrl";
export const register = async(formData) => {
    const response  = await axios.post(`${apiUrl}/api/v1/auth/register`, formData, );
    return response;
};
export const login = async(formData) => {
    const response  = await axios.post(`${apiUrl}/api/v1/auth/login`, formData, {withCredentials: true});
    return response;
};