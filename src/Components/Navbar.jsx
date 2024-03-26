import React from 'react'
import { AppBar, Toolbar, IconButton, Typography,Button, Stack, Switch,FormControlLabel } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          NavBar
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button onClick={() => navigate('/')} color='inherit'>Home</Button>
          <Button onClick={() => navigate('/favs')} color='inherit'>Favourites</Button>
          <Button onClick={() => navigate('/contacto')} color='inherit'>Contact</Button>
          <Button onClick={() => navigate('/details')} color='inherit'>Details</Button>
          <FormControlLabel control={<Switch color="default"/>} label="DarkMode" />
        </Stack>
      </Toolbar>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </AppBar>
  )
}

export default Navbar