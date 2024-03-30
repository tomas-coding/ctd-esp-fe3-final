import React, { useState } from 'react';
import { Box, TextField, Button, Alert, Collapse } from '@mui/material';

const Form = () => {
  const [open, setOpen] = useState(false)
  const [showError, setShowError] = useState({
    nombre: {
      error: false,
      message: ''
    },
    apellido: {
      error: false,
      message: ''
    },
    email: {
      error: false,
      message: ''
    }
  });

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = { ...showError };
  
    if (user.nombre.length < 3) {
      newErrors.nombre = { error: true, message: "Nombre incorrecto." };
    } else {
      newErrors.nombre = { error: false, message: "" };
    }
  
    if (user.apellido.length > 10) {
      newErrors.apellido = { error: true, message: "Apellido incorrecto" };
    } else {
      newErrors.apellido = { error: false, message: "" };
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = { error: true, message: "Email incorrecto" };
    } else {
      newErrors.email = { error: false, message: "" };
    }
    console.log(user.apellido.length < 1);
    console.log(newErrors.apellido.error);
    setShowError(newErrors);
    if (newErrors.apellido.error == false && newErrors.nombre.error == false && newErrors.email.error == false ) {
      setOpen(true)
    }
  };

  return (
    
      <Box sx={{  height: "330px", marginBottom: 10, width: "50%" }} component="form" onSubmit={handleSubmit} className='form-content'>
      <Collapse in={open}>
          <Alert
          severity='success'
          onClose={() =>{setOpen(false)}}>
            Information received. We will contact you shortly to provide you with more information.
          </Alert>
        </Collapse>
        <TextField
          sx={{ marginBottom: 2, marginTop: 20 }}
          helperText={showError.nombre.message}
          error={showError.nombre.error}
          required
          label="Nombre"
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
          type="text"
        />
        <TextField
          sx={{ marginBottom: 2 }}
          helperText={showError.apellido.message}
          error={showError.apellido.error}
          required
          label="Apellido"
          onChange={(e) => setUser({ ...user, apellido: e.target.value })}
          type="text"
        />
        <TextField
          sx={{ marginBottom: 2 }}
          helperText={showError.email.message}
          required
          variant='outlined'
          error={showError.email.error}
          id="email"
          label="Email"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Box sx={{ marginBottom: 5, display: "flex", justifyContent: "center" }}>
          <Button sx={{ marginBottom: 5, height: "60px", maxWidth: "400px", width: "80%" }} variant='contained' type='submit'>Enviar</Button>
        </Box>
        
      </Box>
    
  );
};

export default Form;
