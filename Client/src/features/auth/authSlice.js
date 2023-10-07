import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

const initialState = {
    token: "",
    loading: false,
    error:"",

}

export const auth = createAsyncThunk('/auth', async (formData) => {
    try {
        
        const response = await api.auth(formData);
        console.log("Data posted Succefully", response.data);
        return response.data;
    } catch (error) {
        console.log("Error posting user", error);
        throw error;
    }
    // console.log("in authSlice",formData);
});


// export const signin = createAsyncThunk('/auth', async (formData, history) => {
//     try {

//         const response = await api.postUser(formData);
//         return response.data;
//         // history.push('/');
//     } catch (error) {
//         console.log("Error posting signup data in signin ", error);
//         throw error;
//     }
// });

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;



