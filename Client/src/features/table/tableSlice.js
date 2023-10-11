import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

const initialState = {}

export const table = createAsyncThunk('/table', async (formData) => {
    try {
        const response = await api.table(formData);
        console.log("Succefully posted booking", response.data);
        return response.data;
    } catch (error) {
        console.log("Error posting booking ", error);
        throw error;
    } 
});

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        
    }
})

export default tableSlice.reducer;