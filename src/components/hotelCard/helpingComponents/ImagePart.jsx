import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

let allImages = [
    {
        name: "jodhpur",
        image:"/images/jodhpur.jpg"
    },
    {
        name: "jodhpur1",
        image: "/images/jodhpur1.jpg"
    },
    {
        name: "jodhpur2",
        image: "/images/jodhpur2.jpg"
    },
    {
        name: "jodhpur3",
        image: "/images/jodhpur3.jpg"
    },
    {
        name: "jodhpur4",
        image: "/images/jodhpur4.jpg"
    }
]
function ImagePart() {


    let [bigImage, setBigImage] = useState("/images/jodhpur.jpg");


    function handleEvent(e) {
        setBigImage(e.target.src);
    }

    return (<div className='imagePartCard'>

        <Card sx={{ maxWidth: 520 }}>
            <Card>
                <CardMedia
                    name="jodhpur"
                    component="img"
                    height="300"
                    image={bigImage}
                />
            </Card>

            {allImages.map((items, index) => {
                return (

                    <div className='cardMedia' >
                        <Card sx={{ maxWidth: 100 }} >
                            <CardMedia
                                onMouseOver={handleEvent}
                                name={items.name}
                                component="img"
                                height="100"
                                image={items.image}
                                id={index}
                            />
                        </Card>
                    </div>
                );
            })}
        </Card>

    </div>
    );
}

export default ImagePart;