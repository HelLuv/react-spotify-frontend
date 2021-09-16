import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from './../components/Navbar';
import {Player} from "../components/Player";

export const MainLayout: React.FC = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container style={{ margin: '90px 0' }}>
				{children as React.ReactChild}
			</Container>
			<Player/>
		</>
	)
}
