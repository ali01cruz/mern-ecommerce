import axios from 'axios';
import {BASE_URL_BACK} from '../config';

export const getProducts = async(keyword, pageNumber) => {
    try {
        const {data} = await axios.get(
            `${BASE_URL_BACK}/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );
        return data;
    } catch (error) {
        throw error;
    }
}

export const updateProduct = async(id) => {
    try {
        const {data} = await axios.put(
            `${BASE_URL_BACK}/products/${id}`
        );
        return data;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async(id) => {
    try {
        const {data} = await axios.delete(
            `${BASE_URL_BACK}/products/${id}`
        );
        return data;
    } catch (error) {
        throw error;
    }
}