import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { DarkMode } from '@mui/icons-material';

const ToggleButtonM = ({darkMode,setDarkMode}) => {
    return (
        <>

            <ToggleButton
                value="check"
                selected={darkMode}
                onChange={() => setDarkMode((prevSelected) => !prevSelected)}
            >
                <DarkMode />
            </ToggleButton>
        </>
    )
}

export default ToggleButtonM