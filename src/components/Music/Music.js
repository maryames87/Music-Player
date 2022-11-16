import React, { useContext } from "react";
import { Box } from "@mui/material";
import MusicDetails from "./MusicDetails";
import MusicHandelers from "./MusicHandelers";
import { contexts } from "./../../contexts/index";

const Music = () => {
  const {
    audioRefState: audioRef,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    songs,
    isRepeat,
    setIsRepeat,
    handleNextMusic,
  } = useContext(contexts);

  return (
    <>
      <Box py="4rem" display="flex" alignItems="center" flexDirection="column">
        <MusicDetails />
        <MusicHandelers />
      </Box>
    </>
  );
};

export default Music;
