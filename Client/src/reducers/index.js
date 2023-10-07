import { combineReducers } from "redux";
import hotelReducer from './hotel'; // Import your hotel reducer

const rootReducer = combineReducers({
    hotel: hotelReducer // Use a key named 'hotel' for the reducer
    // ... other reducers if you have them
});

export default rootReducer;
