import React from 'react'
import { ITrack } from '../types/track';
import { Card, Grid, IconButton } from '@material-ui/core';
import cl from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/router';

interface TrackItemProps {
	track: ITrack;
	active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
	const router = useRouter();

	return (
		<Card className={cl.track} onClick={() => router.push('/tracks/' + track._id)}>
			<IconButton onClick={e => e.stopPropagation()}>
				{active
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<img width={70} height={70} src={track.picture} alt="track cover" className={cl.track__cover} />
			<Grid container direction="column" className={cl.track__info}>
				<div className={cl.track__name}>{track.name}</div>
				<div className={cl.track__artist}>{track.artist}</div>
			</Grid>
			{active && <div className={cl.timeline}>02:42 / 03.22</div>}
			<IconButton onClick={e => e.stopPropagation()} className={cl.delete}>
				<Delete />
			</IconButton>
		</Card>
	)
}
