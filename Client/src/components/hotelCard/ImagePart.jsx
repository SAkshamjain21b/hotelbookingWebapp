import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function ImagePart(props) {
    console.log("in ImagePart");
        console.log(props.data);
    let allImage = []
    
    
    for(let i = 0; i < 5; i++){
        let name1 = "jodhpur" + i;
        let image1 = props.data.images[i];
        allImage.push({ name: name1, image: image1 });
    }
    
    
    let [bigImage, setBigImage] = useState(props.data.images[0]);
    
    
    function handleEvent(e) {
        setBigImage(e.target.src);
    }
    
    return (<div className='imagePartCard'>
        <Card sx={{ maxWidth: 550 }}>
            <Card>
                <CardMedia
                    name="jodhpur"
                    component="img"
                    height="300"
                    image={bigImage}
                />
            </Card>
            <div className='flex-container1' >

            {allImage.map((items, index) => {
                return (

                    <div className='cardMedia' key={index} >
                        <Card sx={{ maxWidth: 95 }} >
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
            </div>
        </Card>

    </div>
    );
}

export default ImagePart;