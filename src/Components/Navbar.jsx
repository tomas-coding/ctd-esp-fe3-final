import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography,Button, Stack, Drawer, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGlobalStates } from './utils/Context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MobileBar from './MobileBar.jsx';



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { state, dispatch } = useGlobalStates();
  const changeTheme = () =>{
    console.log(state.theme.palette.type);
    state.theme.palette.type === "light"?dispatch({ type: 'CHANGE_THEME', payload: "light" }):dispatch({ type: 'CHANGE_THEME', payload: "dark" })
    
   
  }
  return (
    <AppBar position='static'>
      <Toolbar>      
         <IconButton
         color='secondary'
         onClick={() => setOpen(true)}
         sx={{display:{xs:"block", sm:"none"}}}>
            <MenuIcon/>
         </IconButton>           
         
        <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}>          
          <MobileBar/>
        </Drawer>

        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          NavBar
        </Typography>
        <Stack direction='row' spacing={2}>
          <Box sx={{display: {xs:"none", sm:"block"}}}>
            <Button onClick={() => navigate('/')} color='inherit'>Home</Button>
            <Button onClick={() => navigate('/favs')} color='inherit'>Favourites</Button>
            <Button onClick={() => navigate('/contacto')} color='inherit'>Contact</Button>
          </Box>
          {state.theme.palette.type === "light"?
          <Button endIcon={<DarkModeIcon />} color='inherit' onClick={changeTheme}>Dark</Button>:
          <Button endIcon={<LightModeIcon />} color='inherit' onClick={changeTheme}>Light</Button>
        }          
        </Stack>
      </Toolbar>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </AppBar>
  )
}

export default Navbar