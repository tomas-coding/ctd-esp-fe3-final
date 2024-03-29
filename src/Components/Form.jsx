import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    peliculaFavorita:""
})
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.nombre.length < 3) {
        setErrorMessage("El nombre debe tener al menos 3 caracteres")
        setShowError(true)
    }
    else if (/^\s/.test(user.nombre)) {
      setErrorMessage("El nombre no debe tener espacios vacios")
      setShowError(true)
  }
    else if (user.apellido.length < 7) {
        setErrorMessage("El apellido debe tener al menos 6 caracteres")
        setShowError(true)
    }
    else{
    setShowError(false)
    setShow(true)
}
}
  return (
    <Container>
        <Typography variant='h4'>Formulario</Typography >
        <form onSubmit={handleSubmit} className='form-content' >
            
            <TextField label="Nombre"  onChange={(e)=> setUser({...user, nombre:e.target.value})} type="text" />
            
            <TextField label="Apellido"  onChange={(e)=> setUser({...user, apellido:e.target.value})} type="text" />
            
            <TextField label="Email"  onChange={(e)=> setUser({...user, peliculaFavorita:e.target.value})} type="text" />
            <Button variant='contained' type='submit'>enviar</Button>

        </form>
        {showError && <h2 className='error-message'>{errorMessage}</h2>}
        
    </Container>
  );
};

export default Form;
