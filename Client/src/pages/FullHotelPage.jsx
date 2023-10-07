import React, { useEffect } from "react";
import AllImages from "../components/hotelPageComponents/AllImages";
import Reviews from "../components/hotelPageComponents/Review";
import AllReviews from "../components/hotelPageComponents/AllReviews";
import Card from '@mui/material/Card';
import AvgRating from "../components/hotelPageComponents/AvgRating";
import InfoPart from "../components/hotelPageComponents/InfoPart";
import BestRoom from "../components/hotelPageComponents/BestRoom";
import Location from "../components/hotelPageComponents/Location";
import Features from "../components/hotelPageComponents/Features";
import RoomType from "../components/hotelPageComponents/RoomType";
import {useDispatch, useSelector } from "react-redux";
import { passDataToFullPage } from "../features/hotel/hotelSlice";
import { useLocation } from "react-router-dom";




function FullHotelPage() {
    const location = useLocation();
    const { singleHotelItems } = useSelector((store) => store.hotel);

    return (
        <div className="grid-container3" >
            <div className="flex-container6 item31" >
                <Card sx={{ maxWidth: "700" }} >
                    <AllImages images={singleHotelItems.images} />
                    <InfoPart
                        name={singleHotelItems.name}
                        rating={singleHotelItems.ratings}
                        location={singleHotelItems.discription}
                    />
                </Card>
                <div className="grid-container2" >
                    <div className="item21">
                        <Card>
                            <BestRoom
                                name={singleHotelItems.name}
                                price={singleHotelItems.price}
                                tax={singleHotelItems.tax}
                            />
                        </Card>
                    </div>
                    <div className="item22" >
                        <Card sx={{ maxWidth: '250px', maxHeight: '110px' }} >
                            <Location
                                location={singleHotelItems.discription}
                            />
                        </Card>
                    </div>
                    <div className="item23" >
                        <Card sx={{ color: 'primary.dark', maxWidth: '250px', maxHeight: '110px' }} >
                            <AvgRating
                                reviews={singleHotelItems.reviews}
                                rating={singleHotelItems.ratings}
                            />
                        </Card>
                    </div>
                </div>

            </div>
            <div className="item32">
                <Features data={singleHotelItems} />
                <hr />
            </div>
            <div id="otherRoom" className="item33">
                <a href="">
                    
                </a>
                <div className="grid-container4">
                <p className="item41" ><strong>Type Of Rooms</strong></p>
                <p className="item42" ><strong>Options</strong></p>
                <p className="item43" ><strong>Prices</strong></p>
                </div>
                {singleHotelItems.roomType.map((items, index) => {
                    return (
                        <div key={index} >
                            <RoomType data={items} />   {/* here mapping all the room type that owner had to provide */} 
                        </div>
                    );
                })}
                <hr />
                
            </div>
            <div className="item34" >
                <Reviews
                    name = {singleHotelItems.name}
                    rating = {singleHotelItems.ratings}
                    reviews = {singleHotelItems.reviews}
                />
                    <hr />
            </div>
            <div className="item35">
                <AllReviews
                    rating={singleHotelItems.ratings}
                    reviews={singleHotelItems.discription}
                    name={singleHotelItems.name}

                />
            </div>
        </div>
    );
}

export default FullHotelPage;