import React from "react";
import { Card as CardMui,CardContent,Typography,Button, CardActions, CardActionArea, Grid, Container } from "@mui/material";


const Card = (props) => {
  const {id, name, username} = props.user;
  console.log(id);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    
        <CardMui>
          {/* En cada card deberan mostrar en name - username y el id */}
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">{name}</Typography>
              <Typography align="center" variant="h6">{username}</Typography>          
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button variant="contained" onClick={addFav} className="favButton">Add fav</Button>
            </CardActions>          
        </CardMui>
     
    
  );
};

export default Card;
