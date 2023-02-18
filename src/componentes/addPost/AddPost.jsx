import { Fab, Tooltip, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import { StyledModal, UserBox } from "./addPostStyles"
import { profile } from '../../medias';
import { EmojiEmotions } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const AddPost = () => {

    const [opened, setOpened] = useState(false)

  return (
    <div>
        <Tooltip 
            onClick={() => setOpened(true)} 
            title="Adicionar Post" 
            sx={{position: 'fixed', bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}, cursor:"pointer"}}>
                
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
            open={opened}
            onClose={() => setOpened(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box bgcolor={"background.default"} color="text.primary" sx={{width: "400px", height:"280px", padding: "2rem", borderRadius: "5%"}}>
                <Typography variant='h6' color="gray" textAlign="center" >Create Post</Typography>

                <UserBox>
                    <Avatar src={profile} sx={{width: "30px", height: "30px"}}/>
                    <Typography fontWeight={500} variant="span">Deny Santoz</Typography>
                </UserBox>

                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    label="Pensando em algo?"
                    multiline
                    rows={3}
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <ImageIcon color='secondary'/>
                    <VideoCameraBackIcon color='success'/>
                    <PersonAddIcon color='error'/>
                </Stack>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{width: "100px"}}><DateRangeIcon/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
        
    </div>
  )
}

export default AddPost