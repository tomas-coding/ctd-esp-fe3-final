import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card'
import { Container, Grid } from '@mui/material';
import { useGlobalStates } from '../Components/utils/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state} = useGlobalStates()
  const {dentists} = state  
  return (
    <main className="" >
      <h1>Home</h1>
      <Container>
        <Grid container spacing={2}>
              {dentists.map(dentist => (
           <Grid key={dentist.id} item xs={12} sm={6} lg={4}>
             <Card dentist={dentist} />
           </Grid>     
              ))}
        </Grid>
      </Container>
        
        {/* Aqui deberias renderizar las cards */}
      
    </main>
  )
}

export default Home