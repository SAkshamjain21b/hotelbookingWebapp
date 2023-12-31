import React, { useState } from "react";
import TypeRoom from "./helpRoomType/TypeRoom";
import Options from "./helpRoomType/Options";
import Price from "./helpRoomType/Price";




function RoomType(props) {
    console.log("in roomtype", props.number);
    console.log(props.data.facility[0]);
    const num = props.number;
    if (num == 0 || num == 1 || num == 2) {
        return (

            <div className="grid-container4" >
                <div className="item44">
                    <TypeRoom data={props.data} />
                </div>
                <div className="item45" >
                    <Options
                        title='Room Only'
                        refundable={props.data.facility[num].refundable}
                        meals={props.data.facility[num].meals}
                        drink={props.data.facility[num].welcomeDrink}
                        breakfast={props.data.facility[num].breakfast}
                        bar={props.data.facility[num].vodkaShots}
                    />
                </div>
                <div className="item48">
                    <Price
                        id={props.hotelid}
                        data={props.data}
                        price={props.data.facility[num].roomPrice}
                        tax={props.data.facility[num].roomTax}
                    />
                </div>
            </div>
        );
    } else {


        return (
            <div className="grid-container4" >

                <div className="item44">
                    <TypeRoom data={props.data} />
                </div>
                <div className="item45" >
                    <Options
                        title='Room Only'
                        refundable={props.data.facility[0].refundable}
                        meals={props.data.facility[0].meals}
                        drink={props.data.facility[0].welcomeDrink}
                        breakfast={props.data.facility[0].breakfast}
                        bar={props.data.facility[0].vodkaShots}
                    />
                </div>
                <div className="item46">
                    <Options
                        title='Room With BreakFast'
                        refundable={props.data.facility[1].refundable}
                        meals={props.data.facility[1].meals}
                        drink={props.data.facility[1].welcomeDrink}
                        breakfast={props.data.facility[1].breakfast}
                        bar={props.data.facility[1].vodkaShots}
                    />
                </div>
                <div className="item47">
                    <Options
                        title='Room With All Meals'
                        refundable={props.data.facility[2].refundable}
                        meals={props.data.facility[2].meals}
                        drink={props.data.facility[2].welcomeDrink}
                        breakfast={props.data.facility[2].breakfast}
                        bar={props.data.facility[2].vodkaShots}
                    />

                </div>
                <div className="item48">
                    <Price
                        number={0}
                        id={props.hotelid}
                        data={props.data}
                        price={props.data.facility[0].roomPrice}
                        tax={props.data.facility[0].roomTax}
                    />
                </div>
                <div className="item49">
                    <Price
                        number={1}
                        id={props.hotelid}
                        data={props.data}
                        price={props.data.facility[1].roomPrice}
                        tax={props.data.facility[1].roomTax}
                    />
                </div>
                <div className="item410">
                    <Price
                        number={2}
                        id={props.hotelid}
                        data={props.data}
                        price={props.data.facility[2].roomPrice}
                        tax={props.data.facility[2].roomTax}
                    />
                </div>
            </div>

        )

    }
}

export default RoomType;