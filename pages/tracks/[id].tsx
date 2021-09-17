import React, {useState} from 'react';
import {IComment, ITrack} from '../../types/track';
import {MainLayout} from '../../layouts/MainLayout';
import {Button, Grid, TextField, Box} from '@material-ui/core';
import {useRouter} from 'next/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import cl from '../../styles/TrackInfo.module.scss';
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

// @ts-ignore
const TrackPage = ({serverTrack}) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: username.value,
        text: text.value,
        trackId: track._id
      })
      setTrack({...track, comments: [...track.comments, response.data]})
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <MainLayout>
      <Button startIcon={<ChevronLeftIcon/>} variant="outlined" color="primary" onClick={() => router.push('/tracks')}>
        To tracks list
      </Button>
      <Grid container className={cl.track__block}>
        <img src={'http://localhost:5000/' + track.picture} width={200} height={200} alt="track cover"/>
        <div className={cl.track__info}>
          <h2>Track name — {track.name}</h2>
          <h2>Artist — {track.artist}</h2>
          <h2>Listens — {track.listens}</h2>
        </div>
      </Grid>
      <h2>Track' lyrics</h2>
      <p>{track.text}</p>
      <h2>Comments:</h2>
      <Grid container>
        <Box marginBottom={2}>
          <TextField {...username} size={'small'} label="Your name" variant="outlined"/>
        </Box>
        <Box marginBottom={2} width={'100%'}>
          <TextField {...text} size={'small'} label="Comment track" variant="outlined" fullWidth multiline minRows={2}
                     maxRows={4}/>
        </Box>
        <Button onClick={addComment} variant="outlined" color="primary">Post comment</Button>
      </Grid>
      <div>
        {track.comments.map((comment: IComment) =>
          <div style={{marginTop: '10px'}}>
            <div style={{fontWeight: 600}}>{comment.username}:</div>
            <div style={{marginLeft: '5px'}}>{comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
  return {
    props: {
      serverTrack: response.data
    }
  }

}