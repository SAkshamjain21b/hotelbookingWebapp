import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import AddHotel from "./owner/AddHotel";
import FullHotelPage from "../pages/FullHotelPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelItems } from "../features/hotel/hotelSlice";
import { postHotel } from "../features/owner/ownerSlice";
import { Routes, Route,BrowserRouter,Switch } from "react-router-dom";
import Signup from "./signup/Signup";
import Auth from "./Auth/Auth";
import BookingTable from "./hotelPageComponents/BookingTable.js";



function App() {

    const { hotelItems, isLoading } = useSelector((store) => store.hotel);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotelItems());
    }, []);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        ); 
    }


    return (
        <BrowserRouter>
        <div>
                <Header />

        <Routes> 
            
                <Route path="/" element={<Home />} />
                    <Route path="/:_id" element={<FullHotelPage />}  >
                        {console.log()}
                        </Route>
                    <Route path="/owner/addHotel" element={<AddHotel />} />
                    <Route path="/auth" Component={Auth} />
                    <Route path="/table" Component={BookingTable} />

                    {/* <Route path="/owner/addHotel/addRoom" element={<AddRoomType />} /> */}
        </Routes>
                <Footer />
        </div>
        </BrowserRouter>
    )

}

export default App;





















































    // const sliderImages = [
    //     {
    //         url:"https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    //     },
    //     {
    //         url: "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg",
    //     },
    //     {
    //         url: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80",
    //     },
    //     {
    //         url: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    //     },
    //     {
    //         url: "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
    //     },
    //     {
    //         url: "https://www.thehoteltrotter.com/wp-content/uploads/2020/07/Olea-All-Suites-Zakynthos-43.jpg",
    //     },
    //     {
    //         url: "https://hips.hearstapps.com/hmg-prod/images/katch-i-d-interiors-portfolio-interiors-outdoor-room-1501113038-4753103-1529681573.jpg",
    //     },
    //     {
    //         url: "https://2.bp.blogspot.com/_4lCeqYSZUoQ/S6NRHHlUuOI/AAAAAAAAAEE/pVVDNH3IwR0/w1200-h630-p-k-no-nu/bar.jpg",
    //     },
    // ];