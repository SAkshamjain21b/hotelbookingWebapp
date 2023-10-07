// redux/hotelReducer.js

const initialState = {
    hotels: [] // Your initial state for hotels
};

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_HOTEL_DATA":
            console.log("Reducer data:", action.payload); // Log the dispatched data
            return {
                ...state,
                hotels: action.payload
            };
        default:
            return state;
    }
};

export default hotelReducer;