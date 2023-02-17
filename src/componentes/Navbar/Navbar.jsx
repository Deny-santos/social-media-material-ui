import { AppBar, Avatar, Badge, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Icons, Search, StyledToolbar, UserBox} from "./NavbarStyles"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { profile } from "../../medias"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Deny Media</Typography>
        <Diversity1Icon/>
        <Search>
          <Input placeholder='Buscar'/>
        </Search>

        <Icons>
        <Badge badgeContent={2} color="error">
          <MailIcon color="inherit" />
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications color="inherit" />
        </Badge>
        <Avatar sx={{width: "30px", height: "30px"}} src={profile} onClick={() => setOpen(true)} />
        </Icons>

        <UserBox onClick={() => setOpen(true)}>
        <Avatar sx={{width: "30px", height: "30px"}} src={profile}  />
        <Typography variant='span'>Deny</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Perfil</MenuItem>
        <MenuItem >Minha Conta</MenuItem>
        <MenuItem >Sair</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar