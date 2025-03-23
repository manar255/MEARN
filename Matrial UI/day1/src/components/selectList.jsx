import React, { useState } from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const SelectList = () => {

    const [option, setOption] = useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (<>

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Options</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={option}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>option 1</MenuItem>
                    <MenuItem value={20}>option 2</MenuItem>
                    <MenuItem value={30}>option 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <h5>option:{option}</h5>
    </>
    )
}

export default SelectList