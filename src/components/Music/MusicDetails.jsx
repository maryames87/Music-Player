import React from 'react'
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { contexts } from './../../contexts/index';

const MusicDetails = () => {
  const {isPlaying,currentSong}=useContext(contexts)
  return (
 <>
  <Avatar
        className={isPlaying ? "rotate-anime" :""}
          sx={{
            transition: "all .3sec ease",
            width: isPlaying ? "20rem" : "15rem",
            height: isPlaying ? "20rem" : "15rem",
          }}
          alt="music"
          src={currentSong.cover}
        />
        <Typography variant="h5" pt="1rem">
          {currentSong.artist || "ArtistName"}
        </Typography>
        <Typography variant="h6" fontWeight="300" pb="1rem">
          {currentSong.name || "SongName"}
        </Typography>
 </>
  )
}

export default MusicDetails