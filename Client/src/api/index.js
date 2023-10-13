import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAllHotels = () => API.get('/hotels');
export const postHotel = (data) => API.post('/hotels/owner/addHotel', data, console.log("in post hotel"));
export const postReviews = (data) => API.post('/hotels/postReview',data,console.log("in postReview api frontend"));

export const auth = (formData) => API.post('/auth', formData,console.log("Sending auth data"));
export const table = (formData) => API.post('/table', formData, console.log("Sending data to booking table"));

export const postUser = (data) => API.post('/hotels',data,console.log("in post user"));

export default API; // Export the API instance
