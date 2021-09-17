import {Box, Button, Card, Grid, TextField} from '@material-ui/core';
import React, {useState} from 'react'
import {MainLayout} from '../../layouts/MainLayout';
import {useRouter} from 'next/router';
import {ITrack} from '../../types/track';
import {TrackList} from '../../components/TrackList';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks, searchTracks} from "../../store/action-creators/track";
import {useDispatch} from "react-redux";


export default function Index() {
  const router = useRouter();
  const {tracks, error} = useTypedSelector(state => state.track);
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch() as NextThunkDispatch;
  const [timer, setTimer] = useState(null);

  if (error) {
    return <MainLayout><h1>{error}</h1></MainLayout>
  }

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer)
    }

    setTimer(
      // @ts-ignore
      setTimeout(async () => {
        await dispatch(searchTracks(e.target.value));
      }, 500)
    );

  }

  return (
    <MainLayout title={"Track List - Music Service"}>
      <Grid container justifyContent={'center'}>
        <Card style={{width: 900}} elevation={1}>
          <Box paddingX={3}>
            <Grid container justifyContent={'space-between'}>
              <h1>Tracks list</h1>
              <Button onClick={() => router.push('/tracks/create')} color="primary">
                Upload
              </Button>
            </Grid>
          </Box>
          <Box paddingX={3}>
            <TextField fullWidth value={query} onChange={search}/>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};


export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    // @ts-ignore
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());

    return {props: {}}
  }
);
