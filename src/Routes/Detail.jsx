import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => setDentist(res.data))
      .catch(error => console.error('Error fetching dentist:', error));      
  }, [params.id]);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',maxWidth: "80%" }}>
    <Card sx={{ maxWidth: "80%",minWidth:"50%" }}>
      <CardMedia
        sx={{ height: "65vh" }}
        component="img"
        image="/images/dentist-icon-189244247.png"
        title="Dentista"
      />
      <CardContent>
        <Typography align='center' gutterBottom variant="h5" component="div">
          {dentist.name}
        </Typography>
        <Typography align='center' variant="body1" >
          Email: {dentist.email}
        </Typography>
        <Typography align='center' variant="body1" >
          City: {dentist.address?.city}
        </Typography>
        <Typography align='center' variant="body1" >
          Address: {dentist.address?.street}, {dentist.address?.suite}
        </Typography>
        <Typography align='center' variant="body1" >
          Phone: {dentist.phone}
        </Typography>
        
      </CardContent>
    </Card>
  </Container>
  );
};

export default Detail;