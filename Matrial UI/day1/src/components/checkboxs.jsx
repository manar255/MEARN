import { Checkbox, Fab, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Checkboxs = () => {
    function handleChange() {
        alert('changed!')
    }
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Accept Terms and Conditions" onChange={handleChange} />
            </FormGroup>
            <Fab color="primary" aria-label="add" sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default Checkboxs