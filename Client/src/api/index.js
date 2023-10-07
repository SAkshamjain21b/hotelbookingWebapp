import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAllHotels = () => API.get('/hotels');
export const postHotel = (data) => API.post('/hotels/owner/addHotel', data, console.log("in post hotel"));


export const auth = (formData) => API.post('/auth', formData,console.log("Sending auth data"));


export const postUser = (data) => API.post('/hotels',data,console.log("in post user"));

export default API; // Export the API instance
