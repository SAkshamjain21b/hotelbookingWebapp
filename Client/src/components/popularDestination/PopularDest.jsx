import React from "react";
import ImageCard from "./ImageCard";



let destinationArray = [
    {
        id:"1",
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    },
    {
        id: "2",
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    },
    {
        id: "3",
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    },
    {
        id: "4",
        image: "/images/jodhpur.jpg",
        title: "Jodhpur",
        content: "A Royal city with grand palaces and heritage sites"
    }
]

function PopularDest() {
    return (<div  >
        <h3>Popular Destinations</h3>
        <div className="grid-container1">

        {destinationArray.map((item,index) => {
            return (
                <div className="grid-item popDestItem" key={index} >

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

export default PopularDest;