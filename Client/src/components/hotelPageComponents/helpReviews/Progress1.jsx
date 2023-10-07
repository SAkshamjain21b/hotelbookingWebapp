import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function Progress(props) {
    return (
        <div>
            <div>
                <p><strong>{props.name}</strong></p>
                <CircularProgress variant="determinate" value={props.info} />
            </div>
        </div>
    )
}

export default Progress;