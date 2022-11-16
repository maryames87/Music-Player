import React, { useEffect, useState, useContext } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Box, Slider } from "@mui/material";
import { IconButton } from "@mui/material";
import { contexts } from "./../../contexts/index";

const MusicHandelers = () => {
  const {
    audioRefState:audioRef,
    setIsPlaying,
    songs,
    currentSong,
    setCurrentSong,
    setIsRepeat,
    isRepeat,
    handleNextMusic,
    isPlaying,
  } = useContext(contexts);

  const [songInfo, setSongInfo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSongInfo(audioRef.current.currentTime);
    }, 1000);
  });

  const handlePlayMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handlePauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePrevMusic = () => {
    let i = songs.findIndex((song) => song.id === currentSong.id);
    if (i === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[i - 1]);
    }
  };

  const handleRepeatMusic = () => {
    setIsRepeat(!isRepeat);
    audioRef.current.play();
  };

  const handleShuffleMusic = () => {
    let random = Math.floor(Math.random() * 8);
    setCurrentSong(songs[random]);
  };

  return (
    <>
      <Box display="flex" alignItems="center" sx={{ width: 800 }}>
        <Box>
          {Math.floor(audioRef?.current?.currentTime / 60 || "00")}:
          {Math.floor(audioRef?.current?.currentTime % 60 || "00")}
        </Box>
        <Slider
          sx={{ margin: " 0 1.5rem" }}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          alignItems="center"
          aria-label="always visible"
          defaultValue={0}
          value={Math.floor(audioRef?.current?.currentTime) || 0}
          min={0}
          max={audioRef?.current?.duration || 0}
          // valueLabelDisplay="on"
        />

        <Box>
          {Math.floor(audioRef?.current?.duration / 60 || "00")}:
          {Math.floor(audioRef?.current?.duration % 60 || "00")}
        </Box>
      </Box>
      <Box>
        <IconButton
          // sx={{ backgroundColor:"rgb(255, 89, 0)" }}
          onClick={handleShuffleMusic}
        >
          <ShuffleIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleNextMusic}>
          <SkipNextIcon fontSize="large" />
        </IconButton>
        <IconButton>
          {isPlaying ? (
            <PauseCircleFilledIcon
              fontSize="large"
              onClick={handlePauseMusic}
            />
          ) : (
            <PlayArrowIcon fontSize="large" onClick={handlePlayMusic} />
          )}
        </IconButton>
        <IconButton onClick={handlePrevMusic}>
          <SkipPreviousIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: isRepeat ? "rgb(255, 89, 0)" : "" }}
          onClick={handleRepeatMusic}
        >
          <RepeatIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
};

export default MusicHandelers;
