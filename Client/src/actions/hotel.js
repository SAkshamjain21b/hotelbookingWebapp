import * as api from '../api';

export const getAllHotels = () => async (dispatch) => {
    try {
        const { data } = await api.getAllHotels();
        dispatch({ type: "ALL_HOTEL_DATA", payload: data });
        console.log(data);
    }
    catch (error) {
        console.log("Error fetching data:", error); // Log errors
    }
}
