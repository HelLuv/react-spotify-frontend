import { Box, Button, Card, Grid } from '@material-ui/core';
import React from 'react'
import { MainLayout } from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import { TrackList } from '../../components/TrackList';

export default function Index() {
	const router = useRouter();
	const tracks: ITrack[] = [
		{ _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some lyrics', listens: 1, audio: 'http://localhost:5000/audio/b041cc8a-b292-47f0-9ac5-ac457ef7cf70.mp3', picture: 'http://localhost:5000/image/14894f19-cc12-4734-bed9-1691f3d4e0c1.jpg', comments: [] },
		{ _id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Some lyrics', listens: 2, audio: 'http://localhost:5000/audio/b041cc8a-b292-47f0-9ac5-ac457ef7cf70.mp3', picture: 'http://localhost:5000/image/14894f19-cc12-4734-bed9-1691f3d4e0c1.jpg', comments: [] },
		{ _id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Some lyrics', listens: 3, audio: 'http://localhost:5000/audio/b041cc8a-b292-47f0-9ac5-ac457ef7cf70.mp3', picture: 'http://localhost:5000/image/14894f19-cc12-4734-bed9-1691f3d4e0c1.jpg', comments: [] },
	]
	return (
		<MainLayout>
			<Grid container justifyContent={'center'}>
				<Card style={{ width: 900 }} elevation={1}>
					<Box paddingX={3}>
						<Grid container justifyContent={'space-between'}>
							<h1>Tracks list</h1>
							<Button onClick={() => router.push('/tracks/create')} color="primary">
								Upload
							</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	)
}
