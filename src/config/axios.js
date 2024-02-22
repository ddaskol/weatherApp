import axios from 'axios'
export const axiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const get = async (url, params) => {
    return await axiosInstance.get(url, {
        params: {
            ...params,
            appid: API_KEY

        }
    })
}

export const API_KEY = 'c6a1132598603f6039a5e2db37ddd9f8'