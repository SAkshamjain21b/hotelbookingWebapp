import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddFacilities from "./AddFacilities";
import FileBase from 'react-file-base64';




function AddRoomType(props) {
    return (
        <div>
            <FileBase
                type="file"
                multiple={false}
                onDone={props.func6}
            />
            {/* <input type="file" onChange={props.func6} /> */}
            <button onClick={props.func7}>Upload Room Images</button>
            <TextField   onChange={props.func1} id="roomName"  name="roomType" label="Room Name" variant="standard" />
            <TextField onChange={props.func1} id="roomArea" name="roomType" label="Room Area" variant="standard" />
            <TextField onChange={props.func1} id="numberOfRoom" name="roomType" label="Number of rooms" variant="standard" />
            <TextField  onChange={props.func1} id="roomView" name="roomType" label="Room View" variant="standard" />
            <TextField  onChange={props.func1} id="bedType" name="roomType" label="Type of Bed" variant="standard" />

            <AddFacilities func={props.func3} func2={props.func4} func6={props.func5} />
            <AddFacilities func={props.func3} func2={props.func4} func6={props.func5} />
            <AddFacilities func={props.func3} func2={props.func4} func6={props.func5} />

            <Button variant="contained" onClick={props.func2} >submit</Button>

        </div>
    );
}

export default AddRoomType;