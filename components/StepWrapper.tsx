import React from 'react'
import { Container, Step, StepLabel, Stepper, Grid, Box, Card } from '@material-ui/core';

interface StepWrapperProps {
	activeStep: number
}
const steps = ['Tracks info', 'Upload cover', 'Upload audio']
export const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) =>
					<Step key={index} completed={activeStep > index}>
						<StepLabel>{step}</StepLabel>
					</Step>
				)}
			</Stepper >
			<Box marginY={9} height={270}>
				<Grid container justifyContent={'center'}>
					<Box width={600}>
						<Card >
							{children}
						</Card>
					</Box>
				</Grid>
			</Box>
		</Container >
	)
}
