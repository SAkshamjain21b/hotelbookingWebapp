import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

const initialState = {
    hotelItems: [],
    singleHotelItems: [],
    isLoading: true,
};

export const getHotelItems = createAsyncThunk('hotel/getHotelItems', async() => {
    try {
        const { data } = await api.getAllHotels();
        return (data);
    }
    catch (error) {
        console.log("Error fetching data:", error); // Log errors
    }

});

export const postReview = createAsyncThunk('hotel/postReview', async (formData) => {
    try {
        const response = await api.postReviews(formData);
        console.log("Data posted Succefully", response.data);
        return response.data;
    } catch (error) {
        console.log("Error posting reviews in hotelSlice", error);
        throw error;
    }
});

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        passDataToFullPage: (state, action) => {
            const item = action.payload;
            state.singleHotelItems = item;
            // console.log(state.singleHotelItems);
        },
        findFromId: (state, action) => {
            const id = action.payload;
            // console.log(id);
            
        }
    },
    extraReducers: {
        [getHotelItems.pending]: (state) => { state.isLoading = true; },
        [getHotelItems.fulfilled]: (state, action) => { state.isLoading = false; state.hotelItems = action.payload; },
        [getHotelItems.rejected]: (state) => { state.isLoading = false; },
    },
});

export const { passDataToFullPage,findFromId,addReviews } = hotelSlice.actions;

export default hotelSlice.reducer;

