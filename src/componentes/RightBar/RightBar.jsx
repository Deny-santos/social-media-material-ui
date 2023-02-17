import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { silvio, profile, daniel, milly, felipe } from '../../medias'
import { itemData } from "./images"

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box sx={{position:"fixed"}} marginRight="30px">
      <Typography variant='h6' fontWeight={100} >Only Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Silvio gerinald" src={silvio} />
        <Avatar alt="Deny santoz" src={profile} />
        <Avatar alt="Daniel" src={daniel} />
        <Avatar alt="Milly" src={milly} />
        <Avatar alt="Felipe Santos " src={felipe} />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100}mt={2} mb={2}>Ultimas Fotos</Typography>
      <ImageList bgcolor="red" sx={{ width: "100%", margin:"0 auto"}} cols={3} rowHeight={100}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2}>Ultimas Conversas</Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={silvio} />
        </ListItemAvatar>
        <ListItemText
          primary="Silvio"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @deny santoz
              </Typography>
              {" — Vai na Europa quando mano?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={felipe} />
        </ListItemAvatar>
        <ListItemText
          primary="Felipe"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @Silvio
              </Typography>
              {" — Ele disse que vai proximo mês"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="deny santoz"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @felipe e @silvio
              </Typography>
              {' — Isso mesmo Proximo mês só vamos, Vai rolar tomorrow Land na Irlanda'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar