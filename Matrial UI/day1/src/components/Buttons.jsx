import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const Buttons = () => {
    return (
        <>
            <Button variant="text" onClick={() => {
                alert('clicked');
            }}>Text</Button>
            <Button variant="contained" onClick={() => {
                alert('clicked');
            }}>Click Me</Button>
            <Button variant="outlined" onClick={() => {
                alert('clicked');
            }}>Outlined Button</Button>

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </>
    )
}

export default Buttons