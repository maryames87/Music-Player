
import React,{ createContext,useState } from "react";

import { musics } from "../data/musics";

const contextsList = {
  currentSong: {},
  setCurrentSong: () => {},
  isPlaying: {},
  setIsPlaying: () => {},
  songs: [],
  setSongs: () => {},
  isRepeat: {},
  setIsRepeat: () => {},
  handleNextMusic:()=>{},
  audioRefState:{},
   setAudioRefState:()=>{},
   openList:{},
    setOpenList:()=>{},
};

export const contexts = createContext(contextsList);

const ContextsProvider = (props) => {
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(musics);
  const [isRepeat, setIsRepeat] = useState(false);
  const [audioRefState, setAudioRefState] = useState({});
  const [openList, setOpenList] = useState(false);
  const handleNextMusic=()=>{
    let i= songs.findIndex((song)=>song.id===currentSong.id)
    if(i===songs.length-1){
      setCurrentSong(songs[0])
    }else{
      setCurrentSong(songs[i+1])
    }
  }

  const myStates = {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    songs,
    setSongs,
    isRepeat,
    setIsRepeat,
    handleNextMusic,
    audioRefState,
     setAudioRefState,
     openList, setOpenList,
  };

  return (
    <contexts.Provider value={myStates}> {props.children} </contexts.Provider>
  );
};
export default ContextsProvider;
