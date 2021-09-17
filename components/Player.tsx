import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Box, Grid, IconButton} from "@material-ui/core";
import cl from '../styles/Player.module.scss';
import {ITrack} from "../types/track";
import {TrackProgress} from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

let audio: any;

export const Player: React.FC = () => {
  const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player);
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active])

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
    }
  }

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  if (!active) {
    return null
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }
  const formatDuration = (duration: number) => {
    let min = Math.floor(duration / 60 % 60);
    let sec = Math.floor(duration % 60);
    let refMin = min < 10 ? '0' + min : min;
    let refSec = sec < 10 ? '0' + sec : sec;
    return [refMin, refSec];
  }

  return (
    <div className={cl.player}>
      <IconButton onClick={play}>
        {pause
          ? <PlayArrow/>
          : <Pause/>
        }
      </IconButton>
      <Grid container direction="column" className={cl.track__info}>
        <Box width={200}>
          <div className={cl.track__name}>{active?.name}</div>
          <div className={cl.track__artist}>{active?.artist}</div>
        </Box>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={volume} right={100} onChange={(e) => {
        changeVolume(e)
      }}/>
    </div>
  );
};


