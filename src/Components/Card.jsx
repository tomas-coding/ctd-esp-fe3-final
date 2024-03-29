import { useEffect } from "react";
import { Card as CardMui, CardContent, Typography, Button, CardActions, CardActionArea } from "@mui/material";
import { useGlobalStates } from '../Context';

const Card = ({ dentist }) => {
  const { state, dispatch } = useGlobalStates();
  const { id, name, username } = dentist;

  const addFav = () => {
    if (state.favs.some(fav => fav.id === id)) {
      dispatch({ type: 'DELETE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <CardMui>
      <CardActionArea>
        <CardContent>
          <Typography align="center" variant="h5">{name}</Typography>
          <Typography align="center" variant="h6">{username}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button variant="contained" onClick={addFav}>
          {state.favs.some(fav => fav.id === id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardActions>
    </CardMui>
  );
};

export default Card;