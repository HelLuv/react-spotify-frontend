import React from 'react';
import { ITrack } from '../../types/track';
import { MainLayout } from '../../layouts/MainLayout';
import { Button, Grid, TextField, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import cl from '../../styles/TrackInfo.module.scss';
const TrackPage = () => {
	const track: ITrack = { _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some lyrics', listens: 1, audio: 'http://localhost:5000/audio/b041cc8a-b292-47f0-9ac5-ac457ef7cf70.mp3', picture: 'http://localhost:5000/image/14894f19-cc12-4734-bed9-1691f3d4e0c1.jpg', comments: [] };
	const router = useRouter();
	return (
		<MainLayout>
			<Button startIcon={<ChevronLeftIcon />} variant="outlined" color="primary" onClick={() => router.push('/tracks')}>
				To tracks list
			</Button>
			<Grid container className={cl.track__block}>
				<img src={track.picture} width={200} height={200} alt="track cover" />
				<div className={cl.track__info}>
					<h2>Track name —  {track.name}</h2>
					<h2>Artist — {track.artist}</h2>
					<h2>Listens — {track.listens}</h2>
				</div>
			</Grid>
			<h2>Track' lyrics</h2>
			<p>{track.text}</p>
			<h2>Comments:</h2>
			<Grid container>
				<Box marginBottom={2} >
					<TextField size={'small'} label="Your name" variant="outlined" />
				</Box>
				<Box marginBottom={2} width={'100%'}>
					<TextField size={'small'} label="Comment track" variant="outlined" fullWidth multiline minRows={2} maxRows={4} />
				</Box>
				<Button variant="outlined" color="primary">Post comment</Button>
			</Grid>
			<div>
				{track.comments.map(comment =>
					<div>
						<div>{comment.username}</div>
						<div>{comment.text}</div>
					</div>
				)}
			</div>
		</MainLayout>
	)
}
export default TrackPage;