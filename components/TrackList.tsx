import React from 'react';
import { ITrack } from '../types/track';
import { Grid, Box } from '@material-ui/core';
import { TrackItem } from './TrackItem';

interface TrackListProps {
	tracks: ITrack[]
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
	return (
		<Grid container direction={'column'}>
			<Box p={2}>
				{tracks.map(track =>
					<TrackItem
						key={track._id}
						track={track}
					/>

				)}
			</Box>
		</Grid>
	)
}
