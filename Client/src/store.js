import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import hotelReducer from './features/hotel/hotelSlice';
import ownerReducer from './features/owner/ownerSlice';
import userReducer from './features/auth/authSlice';
import tableReducer from './features/table/tableSlice';


console.log("this is store");
export const store = configureStore({
    reducer: {
        hotel: hotelReducer,
        owner: ownerReducer,
        user: userReducer,
        table:tableReducer,
    },
});