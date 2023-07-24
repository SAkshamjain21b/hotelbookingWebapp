import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateArea(props) {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    // console.log(value.$M + 1); //this will give me month
    // console.log(value.$D);
    // console.log(value.$y);

    return (
         <div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={props.name}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    />
            </DemoContainer>
        </LocalizationProvider>
                    </div>
    );
}
export default DateArea;