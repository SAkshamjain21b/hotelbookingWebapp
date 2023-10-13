import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

const initialState = {
    post: [],
};

export const postHotel = createAsyncThunk('/owner/addHotel', async (postData) => {
    try {
        
        // console.log(postData);
        const response = await api.postHotel(postData);

        console.log("Data successfully posted:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error posting data:", error);
        throw error;
    }
});

const ownerSlice = createSlice({
    name: "owner",
    initialState,
    reducers: {},
});

export const { addHotel } = ownerSlice.actions;

export default ownerSlice.reducer;
