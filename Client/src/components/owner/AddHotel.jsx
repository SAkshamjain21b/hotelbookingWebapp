import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddRoomType from "./AddRoomType";
import { addHotel,postHotel } from "../../features/owner/ownerSlice";
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64';

function AddHotel() {

    const initialState = {
        postHotelItems: {
            userId: "",
            name: "",
            ratings: "",
            reviews: "",
            discription: "",
            price: "",
            tax: "",
            images: [],
            userReviews:[],
            hotelImages: [],
            roomType:[],
            bathroom: {
                hairDryer: false,
                bodySoap: false,
                bidget: false,
                hotWater: false,
            },
            bedroom: {
                essentials: false,
                extraPillow: false,
                safe: false,
                fan: false,
                washer: false,
                hanger: false,
                iron: false,
                closet: false,
                ac: false
            },
            entertainment: {
                tv: false,
                book: false
            },
            family: {
                childrenToys: false,
                cot: false,
                games: false
            },
            safety: {
                camera: false,
                fireExt: false,
                lock: false,
                firstAid: false
            },
            internet: {
                wifi: false,
            },
            kitchen: {
                kettle: false,
                coffee: false,
                wineGlass: false,
                wine: false
            },
            outdoor: {
                balcony: false,
                garden: false,
                furniture: false,
                dining: false,
                bbq: false
            },
            vehicle: {
                parking: false,
            },
            services: {
                luggage: false,
                longterm: false,
                selfCheckin: false,
                staff: false,
                cleaning: false
            }
        }
    }
    const initialRoomType = {
        roomImages: [],
        roomName: "",
        roomArea: 0,
        roomView: "",
        bedType: "",
        facility: []
    };

    const initialFacility = {
        refundable: false,
        meals: false,
        welcomeDrink: false,
        breakfast: false,
        vodkaShots: false,
        roomPrice: 0,
        roomTax: 0,
    }

    const [roomtype, setRoomType] = useState(initialRoomType);
    const [data, setData] = useState(initialState);
    const [room, setRoom] = useState(false);
    const [facility, setFacility] = useState(initialFacility);
    const [clickFacility, setClickFacility] = useState(true);
    const [file, setFile] = useState();
    const [roomFile, setRoomFile] = useState();
    let count = data.postHotelItems.roomType.length;
    
    const dispatch = useDispatch();
    // const hotelData = useSelector((store) => store.hotel);
    
    function handleChangeFacilityCheckbox(e) {
        let a = e.target.name;
        setFacility({...facility,[a]:!facility[a]})
        // console.log(facility);
    }
    function handleChangeFacilityInput(e){
        let a = e.target.name;
        let b = e.target.value;
        setFacility({ ...facility, [a]: b });
        // console.log(facility);
    }
    function handleClickFacility() {
        setClickFacility(false);
        // console.log("clicked");
        // console.log(clickFacility);
        pushDataFacility();
    }
    function pushDataFacility(e) {
        if (roomtype.facility.length < 4) {   
            roomtype.facility.push(facility);
        }
        // console.log(roomtype);
        
    }

    function handleChangeMainCheckbox(e) {
        let a = e.target.name;
        let b = e.target.id;
        setData({ ...data, postHotelItems: { ...data.postHotelItems, [a]: { ...data.postHotelItems[a], [b]: !data.postHotelItems[a][b] } } });
    }



    function handleClickChild() {
        pushData();
        setRoom((prev) => !prev);
        // console.log(data);
    }
    function handleClickMain() {
        setRoom((prev) => !prev);
    }
    function pushData(e) {
        data.postHotelItems.roomType.push(roomtype);
        // console.log(data);
    }
    function handleChangeRoomType(e) {
        let a = e.target.name; //room type
        let b = e.target.id;    // room name...
        let c = e.target.value; //val
        if (a === "roomType") {   
            setRoomType({ ...roomtype,   [b]: c  } );
        }
        // console.log(roomtype);

    }
    function handleChangeMainInput(e) {
        setData(prev => ({ ...prev, postHotelItems: { ...prev.postHotelItems, [e.target.id]: e.target.value } }));
        // console.log(data);
    }   

    const handleFinalSubmit = () => {
        dispatch(postHotel(data))
        .then((response) => {
            // console.log("Data successfully posted:", response);
            // Clear the form after successful submission
            setData(initialState);
        })
        .catch((error) => {
            console.log("Error posting data:", error);
        });
    };





    function handleUpload(e) {
        data.postHotelItems.images.push(file);
        console.log(data.postHotelItems);
    }
    function handleImageChange(base64) {
        setRoomFile(base64);
    }
    function handleImageUpload() {
        roomtype.roomImages.push(roomFile.base64);
        console.log(roomtype);
        // console.log(roomtype.roomImages);
    }



    return (
        <div>
            {room ? <AddRoomType
                func1={handleChangeRoomType}
                func2={handleClickChild}
                func3={handleChangeFacilityCheckbox}
                func4={handleChangeFacilityInput}
                func5={handleClickFacility}
                func6={handleImageChange}
                func7={handleImageUpload}
            /> :
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => {
                            setFile(base64)
                        }}
                    />
                    {/* <input type="file" onChange={e => setFile(e.target.files[0])} /> */}
                    <button onClick={handleUpload}>Upload five Hotel Images</button>

                    <FormGroup>
                        <TextField onChange={handleChangeMainInput}  id="name" label="Hotel Name" variant="standard" /> 
                        <TextField onChange={handleChangeMainInput}  id="discription" label="Hotel Discription" variant="standard" />
                        <TextField onChange={handleChangeMainInput}  id="price" label="BestRoom Price" variant="standard" />
                        <TextField onChange={handleChangeMainInput}  id="tax" label="Tax on BestRoom" variant="standard" />
                        <FormControlLabel control={<Checkbox name="bathroom" id="hairDryer" onChange={handleChangeMainCheckbox} />} label="Hair Dryer" />
                        <FormControlLabel control={<Checkbox name="bathroom" id="bodySoap" onChange={handleChangeMainCheckbox} />} label="Body Soap" />
                        <FormControlLabel control={<Checkbox name="bathroom" id="bidget" onChange={handleChangeMainCheckbox} />} label="Bidget" />
                        <FormControlLabel control={<Checkbox name="bathroom" id="hotWater" onChange={handleChangeMainCheckbox} />} label="Hot Water" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="essentials" onChange={handleChangeMainCheckbox} />} label="Essentials" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="extraPillow" onChange={handleChangeMainCheckbox} />} label="Extra pillow and matress" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="safe" onChange={handleChangeMainCheckbox} />} label="Safe" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="fan" onChange={handleChangeMainCheckbox} />} label="Fan" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="washer" onChange={handleChangeMainCheckbox} />} label="Washer" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="ac" onChange={handleChangeMainCheckbox} />} label="AC" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="hanger" onChange={handleChangeMainCheckbox} />} label="Hanger" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="iron" onChange={handleChangeMainCheckbox} />} label="Iron" />
                        <FormControlLabel control={<Checkbox name="bedroom" id="closet" onChange={handleChangeMainCheckbox} />} label="Closet" />
                        <FormControlLabel control={<Checkbox name="entertainment" id="tv" onChange={handleChangeMainCheckbox} />} label="TV" />
                        <FormControlLabel control={<Checkbox name="entertainment" id="book" onChange={handleChangeMainCheckbox} />} label="Books and Magzines" />
                        <FormControlLabel control={<Checkbox name="family" id="childrenToys" onChange={handleChangeMainCheckbox} />} label="Toys for Childrens" />
                        <FormControlLabel control={<Checkbox name="family" id="cot" onChange={handleChangeMainCheckbox} />} label="Cot" />
                        <FormControlLabel control={<Checkbox name="family" id="games" onChange={handleChangeMainCheckbox} />} label="Board Games" />
                        <FormControlLabel control={<Checkbox name="safety" id="camera" onChange={handleChangeMainCheckbox} />} label="Security Cameras" />
                        <FormControlLabel control={<Checkbox name="safety" id="fireExt" onChange={handleChangeMainCheckbox} />} label="Fire Extinguisire" />
                        <FormControlLabel control={<Checkbox name="safety" id="lock" onChange={handleChangeMainCheckbox} />} label="Lock" />
                        <FormControlLabel control={<Checkbox name="safety" id="firstAid" onChange={handleChangeMainCheckbox} />} label="First Aid" />
                        <FormControlLabel control={<Checkbox name="internet" id="wifi" onChange={handleChangeMainCheckbox} />} label="Wifi" />
                        <FormControlLabel control={<Checkbox name="kitchen" id="kettle" onChange={handleChangeMainCheckbox} />} label="Kettle" />
                        <FormControlLabel control={<Checkbox name="kitchen" id="coffee" onChange={handleChangeMainCheckbox} />} label="coffee" />
                        <FormControlLabel control={<Checkbox name="kitchen" id="wine" onChange={handleChangeMainCheckbox} />} label="Wine" />
                        <FormControlLabel control={<Checkbox name="kitchen" id="wineGlass" onChange={handleChangeMainCheckbox} />} label="Wine Glass" />
                        <FormControlLabel control={<Checkbox name="outdoor" id="balcony" onChange={handleChangeMainCheckbox} />} label="Balcony" />
                        <FormControlLabel control={<Checkbox name="outdoor" id="garden" onChange={handleChangeMainCheckbox} />} label="Garden" />
                        <FormControlLabel control={<Checkbox name="outdoor" id="furniture" onChange={handleChangeMainCheckbox} />} label="furniture" />
                        <FormControlLabel control={<Checkbox name="outdoor" id="dining" onChange={handleChangeMainCheckbox} />} label="Dining" />
                        <FormControlLabel control={<Checkbox name="outdoor" id="bbq" onChange={handleChangeMainCheckbox} />} label="BBQ" />
                        <FormControlLabel control={<Checkbox name="vehicle" id="parking" onChange={handleChangeMainCheckbox} />} label="Parking" />
                        <FormControlLabel control={<Checkbox name="services" id="luggage" onChange={handleChangeMainCheckbox} />} label="Luggage" />
                        <FormControlLabel control={<Checkbox name="services" id="longTerm" onChange={handleChangeMainCheckbox} />} label="Long Term Stays" />
                        <FormControlLabel control={<Checkbox name="services" id="selfCheckIn" onChange={handleChangeMainCheckbox} />} label="Self CheckIn" />
                        <FormControlLabel control={<Checkbox name="services" id="staff" onChange={handleChangeMainCheckbox} />} label="Staff" />
                        <FormControlLabel control={<Checkbox name="services" id="cleaning" onChange={handleChangeMainCheckbox} />} label="Cleaning" />
                        <Button variant="contained" onClick={handleClickMain} >Add Type of Room</Button>
                    </FormGroup>
                    {/* {console.log(room)} */}

                </div>
            }
            <h6>Number of Room Type you have added so far is {count} to add more click on button "Add Type of Room"</h6>
            {/* <Button variant="contained" onClick={() => {
                dispatch(addHotel(data.postHotelItems), console.log(data.postHotelItems));
                dispatch(postHotel());
            }} >Final Submit</Button> */}
            <Button variant="contained" onClick={handleFinalSubmit}>
                Final Submit
            </Button>


        </div>
    );
}


export default AddHotel;