import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
const Icons = () => {
  return (
  <>
  <HomeIcon sx={{fontSize:50}} color='primary'></HomeIcon>
  <FavoriteIcon color='error'></FavoriteIcon>
  <SettingsIcon fontSize='small'></SettingsIcon>
  </>
  )
}

export default Icons