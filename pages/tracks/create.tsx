import React, {useState} from 'react'
import {MainLayout} from '../../layouts/MainLayout';
import {StepWrapper} from '../../components/StepWrapper';
import {Button, Grid, TextField, Box} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {FileUpload} from '../../components/FileUpload';
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";


export default function Create() {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const router = useRouter()

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('text', text.value)
      formData.append('artist', artist.value)
      // @ts-ignore
      formData.append('picture', picture)
      // @ts-ignore
      formData.append('audio', audio)
      axios.post('http://localhost:5000/tracks', formData)
        .then(resp => router.push('/tracks'))
        .catch(e => console.log(e))
    }
  }

  const prev = () => {
    setActiveStep(prev => prev - 1);
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
        <Box padding={3}>
            <Grid container direction={'column'}>
                <Box marginBottom={2}>
                    <TextField {...name} required label="Track name" variant={'outlined'}/>
                </Box>
                <Box marginBottom={2}>
                    <TextField {...artist} required label="Artist name" variant={'outlined'}/>
                </Box>
                <Box marginBottom={2} width="100%">
                    <TextField {...text} label="Lyrics" multiline minRows={2} variant={'outlined'} fullWidth/>

                </Box>
            </Grid>
        </Box>
        }
        {activeStep === 1 &&
        <FileUpload setFile={() => ({setPicture})} accept={'image/*'}>
            <Button>Upload Cover</Button>
        </FileUpload>
        }
        {activeStep === 2 &&
        <FileUpload setFile={() => ({setAudio})} accept={'audio/*'}>
            <Button>Upload Track</Button>
        </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent={'space-evenly'}>
        <Button disabled={activeStep === 0} startIcon={<ChevronLeftIcon/>} variant="outlined" color="primary"
                onClick={prev}>Previous</Button>
        <Button endIcon={<ChevronRightIcon/>} variant="outlined" color="primary" onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  )
}
