import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const Redios
    = () => {
        const [value, setValue] = useState('female');

        const handleChange = (event) => {
          setValue((event.target).value);
        };
        return (
            <>
                <h1>{value}</h1>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </>
        )
    }

export default Redios
