import React, { useContext, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { contexts } from "./../contexts/index";
import { Drawer } from "@mui/material";
import { ListItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const {
    currentSong,
    songs,
    setSongs,
    setCurrentSong,
    setIsPlaying,
    isRepeat,
    handleNextMusic,
    setAudioRefState,
    setOpenList,
    openList,
  } = useContext(contexts);
  
  const audioRef = useRef(null);
  const navigate=useNavigate()
  const [cookies, setCookie,removeCookies] = useCookies();

  useEffect(() => {
    let updateSongs = songs.map((song) => {
      if (song === currentSong) {
        return {
          ...currentSong,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(updateSongs);
    setAudioRefState(audioRef);
    audioRef.current.play();
  }, [currentSong]);

  const handleMusic = (music) => {
    setCurrentSong(music);
    setOpenList(false);
  };

  const handleLogin=()=>{
navigate("/Login")
  }
  const handleLogOut=()=>{
   removeCookies("token")
      }
  return (
    <>
      <Box
        onCanPlay={() => setIsPlaying(true)}
        onEnded={function () {
          if (isRepeat) {
            audioRef.current.play();
          } else {
            handleNextMusic();
          }
        }}
        component="audio"
        ref={audioRef}
        src={currentSong.audio}
      ></Box>
      <Drawer anchor="right" open={openList} onClose={() => setOpenList(false)}>
        <Box component="ul">
          {" "}
          {songs.map((music) => (
            <ListItem
              className={music.active ? "active" : ""}
              onClick={() => handleMusic(music)}
              key={music.id}
              components="li"
              button
            >
              <Avatar
                alt={music.name}
                src={music.cover}
                sx={{
                  width: 56,
                  height: 56,
                }}
              />
              <Box>
                <Typography textAlign={"right"}> {music.name} </Typography>
                <Typography textAlign={"right"}> {music.artist} </Typography>
              </Box>
            </ListItem>
          ))}
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => setOpenList(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <QueueMusicIcon sx={{ px: ".5rem", fontSize: "3rem" }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "1.5rem" }}
            >
              موزیک
            </Typography>
            <Box display="flex" >
              <Box display="flex" component="ul">
                <Box  mx="2rem"  component="li">
                  <Link to="/AboutUs">درباره ما</Link>
                </Box>
                <Box  mx="2rem" component="li">
                  <Link to="/Shop">خرید</Link>
                </Box>
                <Box  mx="2rem" component="li">
                  <Link to="/ContactUs">تماس با ما</Link>
                </Box>
                <Box  mx="2rem" component="li">
                  <Link to="/">موزیک</Link>
                </Box>
              </Box>
              {cookies?.token?(

              <Button
              onClick={handleLogOut}
              sx={{ fontSize: "1.5rem" }} color="inherit">
                خروج
              </Button>
              ):(

              <Button
              onClick={handleLogin}
              sx={{ fontSize: "1.5rem" }} color="inherit">
                ورود
              </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
