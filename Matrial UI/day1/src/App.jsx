

import { useState } from 'react'
import './App.css'
import Avatar from './components/Avatar'
import Buttons from './components/Buttons'
import Icons from './components/Icons'
import TextField from './components/TextField'
import ToggleButtonM from './components/ToggleButtonM'
import Typography from './components/Typography'
import Chaps from './components/chaps'
import Checkboxs from './components/checkboxs'
import Redios from './components/redios'
import Reting from './components/reting'
import SelectList from './components/selectList'
import { Box } from '@mui/material'

function App() {

  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: 2, backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
    <Typography></Typography>
      <Icons></Icons>
      <Avatar></Avatar>
      <Chaps></Chaps>
      <Buttons></Buttons>
      <Checkboxs></Checkboxs>
      <Redios></Redios>
      <Reting></Reting>
      <SelectList></SelectList>
      <TextField></TextField>
      <ToggleButtonM darkMode={darkMode} setDarkMode={setDarkMode}></ToggleButtonM>
    </Box>
     
    </>
  )
}

export default App
