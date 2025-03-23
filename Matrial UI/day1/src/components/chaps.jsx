import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';
import React from 'react'

const chaps = () => {
    function handleClick() {
        alert('hello,this chaip clicked')
    }
    function handleDelete() {
        alert('hello,this chaip deleted')
    }
    return (
        <>
            <Chip label="Basic Chip" />
            <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        </>
    )
}

export default chaps