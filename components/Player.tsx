import React from 'react';
import {Pause, PlayArrow} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import cl from '../styles/Player.module.scss';
import {ITrack} from "../types/track";

export const Player:React.FC = () => {
const track:ITrack=  { _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some lyrics', listens: 1, audio: 'http://localhost:5000/audio/b041cc8a-b292-47f0-9ac5-ac457ef7cf70.mp3', picture: 'http://localhost:5000/image/14894f19-cc12-4734-bed9-1691f3d4e0c1.jpg', comments: [] };

  const active = false;
  return (
    <div className={cl.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction="column" className={cl.track__info}>
        <div className={cl.track__name}>{track.name}</div>
        <div className={cl.track__artist}>{track.artist}</div>
      </Grid>
    </div>
  );
};


