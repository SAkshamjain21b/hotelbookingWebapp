import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AirIcon from '@mui/icons-material/Air';
import SoapIcon from '@mui/icons-material/Soap';
import HotTubIcon from '@mui/icons-material/HotTub';//bathroom
import LockIcon from '@mui/icons-material/Lock';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IronIcon from '@mui/icons-material/Iron';//bedroom
import TvIcon from '@mui/icons-material/Tv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ToysIcon from '@mui/icons-material/Toys';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';//entairnment
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';//safety
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';//internet
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LiquorIcon from '@mui/icons-material/Liquor';
import DiningIcon from '@mui/icons-material/Dining';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';//kitchen
import ChairIcon from '@mui/icons-material/Chair';//furniture
import BalconyIcon from '@mui/icons-material/Balcony';
import YardIcon from '@mui/icons-material/Yard';//outdoor
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LuggageIcon from '@mui/icons-material/Luggage';
import GroupIcon from '@mui/icons-material/Group';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';//services
import { useDispatch, useSelector } from "react-redux";






const style = {
    position: 'absolute',
    overflow: 'scroll',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
};

function AllFeatures(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Click Here To See More</Button>
            <Modal
                open={open}
                onClick={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={style}
                >
                <Box>
                    <div>
                        <h5>Bathroom</h5>
                        {props.data.bathroom.hairDryer ? <div><AirIcon /><p>HairDryer</p></div> : null}
                        {props.data.bathroom.bodySoap ? <div><SoapIcon /> <p>BodyWash</p></div> : null}
                        {props.data.bathroom.hotWater ? <div><HotTubIcon /> <p>HotWater</p></div> : null}
                        <hr />
                        <h5>Bedroom</h5>
                        {props.data.bedroom.safe ? <div><LockIcon /> <p>Safe</p></div> : null}
                        {props.data.bedroom.ac ? <div><AcUnitIcon /> <p>AC</p></div> : null}
                        {props.data.bedroom.hanger ? <div><CheckroomIcon /><p>Hanger</p></div>:null}
                        {props.data.bedroom.iron ? <div><IronIcon /> <p>Iron</p></div> : null}
                        <hr />
                        <h5>Entertainment</h5>
                        {props.data.entertainment.tv ? <div><TvIcon /> <p>TV</p></div> : null }
                        {props.data.entertainment.book ? <div><MenuBookIcon /> <p>Books</p></div> : null}
                        {props.data.family.childrenToys ? <div><ToysIcon /> <p>Toys for childern</p></div> :null}
                        {props.data.family.games ? <div><SportsEsportsIcon /> <p>Games</p></div> : null}
                        <hr />
                        <h5>Safety</h5>
                        {props.data.safety.camera ? <div><CameraOutdoorIcon /><p>Security Camera</p></div> : null}
                        {props.data.safety.fireExt ? <div><FireExtinguisherIcon /><p>FireExtinguisher</p></div> : null}
                        {props.data.safety.lock ? <div><LockIcon /><p>Locks</p></div> : null}
                        {props.data.safety.firstAid ? <div><MedicalServicesIcon /><p>FirstAid</p></div> : null}
                        <hr />
                        <h5>Internet</h5>
                        {props.data.internet.wifi ? <div><NetworkWifiIcon /><p>Wifi</p></div>:null}
                        <hr />
                        <h5>Kitchen</h5>
                        {props.data.kitchen.coffee ? <div><CoffeeIcon /><p>Coffee</p></div> : null}
                        {props.data.kitchen.kettle ? <div><CoffeeMakerIcon /><p>Kettle</p></div> : null}
                        {props.data.kitchen.wine ? <div><LiquorIcon /><p>Wine</p></div> : null}
                        {props.data.outdoor.dining ? <div><DiningIcon /><p>Dinning</p></div> : null}
                        {props.data.outdoor.bbq ? <div><OutdoorGrillIcon /><p>BBQ</p></div> : null}
                        <hr />
                        <h5>Furniutre</h5>
                        {props.data.outdoor.furniture ? <div><ChairIcon /><p>Furniture</p></div>:null}
                        <hr />
                        <h5>Outdoor</h5>
                        {props.data.outdoor.balcony ? <div><BalconyIcon /><p>Balcony</p></div> : null}
                        {props.data.outdoor.garden ? <div><YardIcon /><p>Garden</p></div> : null}
                        <hr />
                        <h5>Services</h5>
                        {props.data.bedroom.washer ? <div><LocalLaundryServiceIcon /> <p>Laundary</p></div> : null}
                        {props.data.services.luggage ? <div><LuggageIcon /><p>Luggage</p></div> : null}
                        {props.data.vehicle.parking ? <div><LocalParkingIcon /><p>Parking</p></div> : null}
                        {props.data.services.staff ? <div><GroupIcon /><p>Staff</p></div> : null}
                        {props.data.services.cleaning ? <div><CleaningServicesIcon /><p>Cleanning Services</p></div> : null}
                </div>
                </Box>
            </Modal>
        </div>
    );
}
export default AllFeatures;