import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card'
import { Container, Grid } from '@mui/material';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      });
  }, []);  
  return (
    <main className="" >
      <h1>Home</h1>
      <Container>
        <Grid container spacing={2}>
              {users.map(user => (
           <Grid key={user.id} item xs={12} sm={6} lg={4}>
             <Card user={user} />
           </Grid>     
              ))}
        </Grid>
      </Container>
        
        {/* Aqui deberias renderizar las cards */}
      
    </main>
  )
}

export default Home