import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import BedIcon from '@mui/icons-material/Bed';
import DeskIcon from '@mui/icons-material/Desk';


function TypeRoom(props) {
    const [imageNum, setImageNum] = useState(1);


    let workdesk = true;
    return (
        <div>
            <Card sx={{ minHeight: '950px' }} >
                <CardMedia>
                    <SimpleImageSlider
                        width={400}
                        height={300}
                        images={props.data.roomImages}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        onStartSlide={(index, length) => {
                            setImageNum(index);
                        }}
                        autoPlayDelay={3}
                    />
                </CardMedia>
                <CardContent>
                    <Stack>
                        
                        <h3><strong>{props.data.roomName}</strong></h3> {/* room name */}
                        <p><SquareFootIcon />{props.data.roomArea} sq.ft</p>{/* room Area */}
                        <p><VrpanoIcon />{props.data.roomView} view</p>{/* room view */}
                        <p><BedIcon />{props.data.bedType}</p>{/* bedType */}
                        <p> {(workdesk ? <DeskIcon /> : null)} Workdesk</p>

                    </Stack>
                </CardContent>
            </Card>
        </div>
    );
}

export default TypeRoom;