import React from "react";


function ImageCard(props) {


    return (
        <div className="textOfImgCard" style={{backgroundImage : `url(${props.image})` }} >
            <div >
            <h3>{props.cityName}</h3>
            <p>{props.info}</p>
            </div>

        </div>
    );
}

export default ImageCard;