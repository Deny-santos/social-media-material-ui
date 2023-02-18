
import { Box } from '@mui/material'
import React from 'react'
import Post from '../Post/Post'
import { milly, nature, silvio, profile, sagitario } from "../../medias"

const text1 = "aproveitando a vida"
const text2 = "olhando para o nada e abservando tudo"
const text3 = "A primeira foto de um buraco negro foi top"

const Feed = () => {
  return (
    <Box flex={4} p={4}>
      <Post post={nature} profile={milly} text={text1} name={"milly"}/>
      <Post post={silvio} profile={silvio} text={text2} name={"Silvio Gerinald"}/>
      <Post post={sagitario} profile={profile} text={text3} name={"Deny Santoz"}/>
    </Box>
  )
}

export default Feed