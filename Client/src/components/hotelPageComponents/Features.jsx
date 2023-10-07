import * as React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AllFeatures from './AllFeatures';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Features(props) {
    console.log(props.data);
    return (
        <div >
        <div className='flex-container6'>
            <Stack direction="row" spacing={2}>
        <h2 id='feature1'>What this Hotel Provide:</h2>
                    <Item><LockIcon /> Lockable Rooms</Item>
                    <Item><WifiIcon />Wifi</Item>
                    <Item><AcUnitIcon />Air Conditioner</Item>
                    <Item><PetsIcon />Pets Allowed</Item>
                    <Item><DirectionsCarIcon />Parking</Item>
            </Stack>
            </div>
            <div id='feature2'>
            <AllFeatures data={props.data} />
            </div>
        </div>
    );
}
export default Features;




{/* <Item><FilterHdrIcon />Mountain view</Item> */} // these features we have to give owner options to choose so that they can choose what features they have in there hotel