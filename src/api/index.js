import { get } from "../config/axios";

export const getCurrentWeather = async () => {
    try {
        const response = await get('weather',
            {
                lat: 10.99,
                lon: 44.34,
            }
        );
        console.log(response)
        // return response.data.results
    } catch (error) {
        console.error(error);
    }
}