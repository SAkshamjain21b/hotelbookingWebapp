import React ,{useEffect} from "react";
import ImagePart from "./ImagePart";
import Card from '@mui/material/Card';
import InfoPart from "./InfoPart";
import PricingCard from "./PricingCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { passDataToFullPage , findFromId } from "../../features/hotel/hotelSlice";

const HotelList = function HotelCard() {
    // const { hotel } = useSelector((state) => state.hotel);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { hotelItems } = useSelector((store) => store.hotel);
    return (
        <div className="flex-container" >
            {hotelItems.data.map((items,index) => {
                return (
                    <div key={index}>

                    <Link to={'/' + items._id}>
                            <Card onClick={() => {
                                // dispatch(findFromId(items._id));
                                dispatch(passDataToFullPage(items));

                    }} style={{ border: "1px solid black", borderRadius: "20px", maxWidth: 500 }} >
                        <ImagePart data={items} />
                    <InfoPart data={items} />
                    <PricingCard data={items} />
                 </Card>
                    </Link>
                    </div>
                    );
                })}
        </div>
    );
}

export default HotelList;