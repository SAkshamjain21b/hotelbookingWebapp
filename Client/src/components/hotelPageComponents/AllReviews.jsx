import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';

let allInfo = [
    {
        title: "A business traveller's review",
        rating: '4',
        name1: 'kiku',
        date: 'Aug05,2023',
        content: "Hotel located close to highway & panjim main city. Waiting lounge comfortable. Food great ! good & personalized services. Value for money hotel. Room was a bit cramped. On business travel one invites customers & colleagues for party. Then it gets tight. Internet strength can be increased in the rooms. Lobby & lounge it's fine"
    },
    {
        title: "Average Stay",
        rating: '3',
        name1: 'john',
        date: 'mar08,2023',
        content: "Breakfast quality should taken care. There were repeated breakfast. Cleanliness is appreciable. Staff is good & nice"
    },
    {
        title: "A business traveller's review",
        rating: '4',
        name1: 'kiku',
        date: 'Aug05,2023',
        content: "Hotel located close to highway & panjim main city. Waiting lounge comfortable. Food great ! good & personalized services. Value for money hotel. Room was a bit cramped. On business travel one invites customers & colleagues for party. Then it gets tight. Internet strength can be increased in the rooms. Lobby & lounge it's fine"
    },
    {
        title: "A business traveller's review",
        rating: '4',
        name1: 'kiku',
        date: 'Aug05,2023',
        content: "Hotel located close to highway & panjim main city. Waiting lounge comfortable. Food great ! good & personalized services. Value for money hotel. Room was a bit cramped. On business travel one invites customers & colleagues for party. Then it gets tight. Internet strength can be increased in the rooms. Lobby & lounge it's fine"
    }
]


function AllReviews(props) {
    let allInfo1 = [
        {
            title: props.name,
            rating: props.rating,
            name1: 'laila',
            date: 'Aug 05,2023',
            content:props.reviews
        },
        {
            title: props.name,
            rating: props.rating,
            name1: 'laila',
            date: 'Aug 05,2023',
            content: props.reviews
        }, {
            title: props.name,
            rating: props.rating,
            name1: 'laila',
            date: 'Aug 05,2023',
            content: props.reviews
        }, {
            title: props.name,
            rating: props.rating,
            name1: 'laila',
            date: 'Aug 05,2023',
            content: props.reviews
        }, {
            title: props.name,
            rating: props.rating,
            name1: 'laila',
            date: 'Aug 05,2023',
            content: props.reviews
        },
        
    ]
    return (
        <div>
            <h4>Customer's Reviews</h4>
            {allInfo1.map((item) => {
                return (
            <Card sx={{ minWidth: '400' }}>
                <CardContent>
                    <h6><strong>{item.title}</strong></h6>
                    <p><strong>Rated </strong><Rating name="read-only" value={parseInt(item.rating)} /> by {item.name1} on {item.date}</p>
                    <p>{item.content}</p>
                </CardContent>
            </Card>
                );
            })}
        </div>
    );
}

export default AllReviews;