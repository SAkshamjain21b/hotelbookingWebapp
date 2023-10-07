import React from "react";
import Progress1 from "./helpReviews/Progress1.jsx";
import Box from '@mui/material/Box';


function Reviews(props) {
    
    let rate = parseInt( props.rating);
    let totalReview = 4550;
    let totalRating = 5604;
    let location = rate*20;
    let clean = rate*20;
    let food = rate*20;
    let room = rate*20;
    let value = rate*20;
    return (
        <div>
            <div id="rating">
                <h4><strong>User Rating and Reviews</strong></h4>
                <p>info you might want to know before you Book!!!</p>
            </div>
            <hr />
            <div className="flex-container9">
                <div id="rate" >
                    <Box m={1} sx={{ color: 'white', borderRadius: '5px', backgroundColor: 'primary.dark', maxWidth: '50px', maxHeight: '50px', padding: '2px' }} ><h2>{rate}</h2></Box>
                    <h6><strong>{props.reviews}</strong></h6>
                    <p>{totalReview} User Reviews and {totalRating} Ratings</p>
                </div>
                <Progress1 name='Location' info={location} />
                <Progress1 name='Cleanliness' info={clean} />
                <Progress1 name='Room' info={room} />
                <Progress1 name='Food' info={food} />
                <Progress1 name='Value for Money' info={value} />

                {/* <div>
                    <p><strong></strong></p>
                    <CircularProgress variant="determinate" value={clean} />
                </div>
                <div>
                    <p><strong>Room</strong></p>
                    <CircularProgress variant="determinate" value={room} />
                </div>
                <div>
                    <p><strong>Food</strong></p>
                    <CircularProgress variant="determinate" value={food} />
                </div>
                <div>
                    <p><strong>Value for money</strong></p>
                    <CircularProgress variant="determinate" value={value} />
                </div> */}
            </div>
        </div>
    )
    
}

export default Reviews;