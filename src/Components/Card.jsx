import { useEffect } from "react";
import { Card as CardMui, CardContent, Typography, Button, CardActions, CardActionArea,CardMedia } from "@mui/material";
import { useGlobalStates } from '../Context';
import { useNavigate } from 'react-router-dom'
const Card = ({ dentist }) => {
  const { state, dispatch } = useGlobalStates();
  const { id, name, username } = dentist;
  const navigate = useNavigate()
  const addFav = () => {
    if (state.favs.some(fav => fav.id === id)) {
      dispatch({ type: 'DELETE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <CardMui
    sx={{
      transition:"0.2s", "&:hover":{
        transform:"scale(1.05)",
      }
    }}>
      <CardActionArea onClick={() => navigate('/detail/' + id)}>
      <CardMedia
        sx={{ height: "50vh" }}
        component="img"
        image="/images/dentist-icon-189244247.png"
        title="Dentista"
      />
        <CardContent>
          <Typography align="center" variant="h5">{name}</Typography>
          <Typography align="center" variant="h6">{username}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }} >
        <Button variant="contained" onClick={addFav}>
          {state.favs.some(fav => fav.id === id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardActions>
    </CardMui>
  );
};

export default Card;