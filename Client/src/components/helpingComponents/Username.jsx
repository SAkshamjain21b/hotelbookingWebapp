import React from 'react';
import TextField from '@mui/material/TextField';

function Username(props) {

    return (
        <div>
            <p> <strong>Username:</strong></p><TextField onChange={props.func1} sx={{ width: '400px' }} id="outlined-basic" label="Username" variant="outlined" />
            <br />
            <br />
        </div>
    )
}

export default Username;