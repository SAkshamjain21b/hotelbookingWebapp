import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

let rates = "5000.00";
let taxes = "499.99"
function BestRoom(props) {

    return (
        <div>
            <Card sx={{maxWidth:'500'}} >
                <div className="flex-container7" >
                    <div>
                <CardContent>
                    <Typography display={'flex'} >
                                 <h4>{props.name }</h4> {/* here we will put name of room but for now its hotel name only  */}
                    </Typography>
                    <Typography display={'flex'} ><PeopleOutlineIcon /> <p> for 2 adults</p></Typography>
                    <Typography display={'flex'} ><CloseIcon color="warning" />  <p>non-refundable</p></Typography>
                        <Typography display={'flex'} ><CheckIcon color="success" /><p>Room-only</p></Typography>
                </CardContent>
                    </div>
                    <div>
                        <CardContent>
                            <Typography display={'flex'} justifyContent="flex-end" >per Night</Typography>
                            <Typography display={'flex'} justifyContent="flex-end"><CurrencyRupeeIcon /><h4>{props.price}</h4></Typography> {/*here will give particular room price  */}
                            <Typography display={'flex'} justifyContent="flex-end"><AddIcon /><CurrencyRupeeIcon fontSize="small" /><p>{props.tax} taxes and fees</p></Typography>{/*here will give particular room taxes */}
                        </CardContent>
                    </div>
                </div>
                <hr />
                <div className="flex-container6" >
                <div>
                <CardActions>
                <Button variant="contained">Book Now</Button>
                    </CardActions>
                </div>
                <div>
                    <CardActions>
                        <Button variant="outlined" href="otherRoom">View other Rooms</Button>
                    </CardActions>
                </div>
                </div>
            </Card>
        </div>
    )
    
}

export default BestRoom;