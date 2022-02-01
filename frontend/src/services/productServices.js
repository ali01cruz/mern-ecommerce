import axios from 'axios';
import {BASE_URL_BACK} from '../config';

const getProducts = async(keyword, pageNumber) => {
    try {
        const {data} = await axios.get(
            `${BASE_URL_BACK}/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getProducts;