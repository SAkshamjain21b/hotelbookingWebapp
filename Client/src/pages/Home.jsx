import React from "react";
import AskCard from "../components/locationAskCard/AskCard";
import PopularDest from "../components/popularDestination/PopularDest";
import HotelList from "../components/hotelCard/HotelCard";
import {useDispatch} from "react-redux";

function Home() {
    const dispatch = useDispatch();
    return (
        <div className="grid-container" >
            <div className="grid-item item2" >
                <AskCard />
            </div>
            <div className="grid-item item3" >
                <PopularDest />
            </div>
            <div className="grid-item item4">
                <HotelList />
            </div>
        </div>
    );
}


export default Home;