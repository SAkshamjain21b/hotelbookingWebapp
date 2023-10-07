import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";


export default function App(props) {
    const [imageNum, setImageNum] = useState(1);
    const sliderImages1 = props.images;

    return (
        <div>
            <SimpleImageSlider
                width={600}
                height={350}
                images={sliderImages1}
                showNavs={true}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            />
        </div>
    );
}