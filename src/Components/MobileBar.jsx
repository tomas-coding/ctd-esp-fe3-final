import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const MobileBar = () => {
    const navigate = useNavigate()
  return (
    
        <Box sx={{width:250, bgcolor:"#6572c3", height:"100%", color:"white"}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon>
                            <HomeOutlinedIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText>                            
                            Home
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/favs')}>
                        <ListItemIcon>
                            <StarBorderOutlinedIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText>
                            Favourites
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/contacto')}>
                        <ListItemIcon>
                            <PhoneOutlinedIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText>
                            Contact
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    
  )
}

export default MobileBar