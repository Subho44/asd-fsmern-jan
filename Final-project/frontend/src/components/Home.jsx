import React from 'react'
import {Container,Typography} from "@mui/material"
import Jobspage from '../pages/Jobspage'

const Home = () => {

  return <>
  <Container maxWidth="md" sx={{py:3}}>
    <Typography variant='h4' fontWeight={800} sx={{mb:2}}>
      Job CRUD
    </Typography>
    <Jobspage/>
  </Container>
  
  </>
}

export default Home