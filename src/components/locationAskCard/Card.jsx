import React from "react";
import DateArea from "./helpingComponents/DateArea";
import InputArea from "./helpingComponents/InputArea";
import ImageCard from "./helpingComponents/ImageCard";

let destinationArray = [
    {
        image:"/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    },
    {
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    },
    {
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    }
]


function Card() {
    return (<div  >
        <p className="card1" >Book Hotels and HomeStays</p>
        <h3 className="newSection" >Popular Destinations</h3>
        

            <div className="card" >
                <InputArea name="Where ?" />
                <br />
                <DateArea name="Check-in Date" />
                <br />
                <DateArea name="Check-out Date" />
                <br />
                <button className="button1">Explore</button> {/* here i have to do a db find to search by location */}
        </div>     
        <div>

        {destinationArray.map((item) => {
            return (
                <div className="bestDestinations">

                <ImageCard
                        image={item.image}
                        cityName={item.title}
                        info={item.content}
                        />
                        </div>
                    );
                })}
                </div>
                

    </div>);
}

export default Card;



