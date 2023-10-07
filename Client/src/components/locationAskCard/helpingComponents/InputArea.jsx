import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputArea(props) {
    return (
        <div>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label={props.name}  placeholder='e.g. - Delhi' variant="standard" />
        </Box>
            </div>
    );
}

export default InputArea;