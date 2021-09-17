import {Box, Button, Card, Grid} from '@material-ui/core';
import React from 'react'
import {MainLayout} from '../../layouts/MainLayout';
import {useRouter} from 'next/router';
import {ITrack} from '../../types/track';
import {TrackList} from '../../components/TrackList';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/track";

export default function Index() {
  const router = useRouter();
  const {tracks, error} = useTypedSelector(state => state.track);

  if (error) {
    return <MainLayout><h1>{error}</h1></MainLayout>
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
