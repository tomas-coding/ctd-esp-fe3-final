import React from 'react'
import Form from '../Components/Form'
import { Container, Typography, Box } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Container>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:5 }}>
    <Typography variant="h4">Want to know more?</Typography>
    <Typography variant="h5">Send us your questions and we will contact you</Typography>
    <Form />
  </Box>
</Container>
  )
}

export default Contact