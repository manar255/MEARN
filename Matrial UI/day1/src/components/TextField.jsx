
import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextFieldM = () => {
    const [name, setName] = useState('Your Name')
    return (
        <>
            <h5>my name is :{name}</h5>
            <TextField
                fullWidth
                id="outlined-required"
                label="Enter your name"
                defaultValue="Your Name"
                onChange={(event) => {
                    setName(event.target.value);
                  }}
            />

        </>
    )
}

export default TextFieldM