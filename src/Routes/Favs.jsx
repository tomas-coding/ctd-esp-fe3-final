import React from "react";
import Card from "../Components/Card";
import { Container, Grid } from '@mui/material';
import { useGlobalStates } from '../Context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalStates()
  const {favs} = state 
  return (
    <>
      <h1>Dentists Favs</h1>
      <Container>
        <Grid container spacing={2}>
              {favs.map(dentist => (
           <Grid key={dentist.id} item xs={12} sm={6} lg={4}>
             <Card dentist={dentist} />
           </Grid>     
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default Favs;
